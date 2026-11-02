import { useState, useEffect } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';
import {
  getPriceOffers,
  createPriceOffer,
  acceptPriceOffer,
  rejectPriceOffer,
  PriceOfferResponse,
} from '../../clients/PriceOfferClient';

interface PriceNegotiationPanelProps {
  conversationId: string;
  bookingId: string;
  currentBookingPrice: number;
  currentUserId: string;
}

const formatPrice = (amount: number): string => {
  return amount.toLocaleString('vi-VN') + 'đ';
};

const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const PriceNegotiationPanel = ({
  conversationId,
  bookingId,
  currentBookingPrice,
  currentUserId,
}: PriceNegotiationPanelProps) => {
  const [offers, setOffers] = useState<PriceOfferResponse[]>([]);
  const [proposedPrice, setProposedPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const pendingOffer = offers.find((o) => o.status === 'PENDING');
  const offerHistory = offers.filter((o) => o.status !== 'PENDING');

  useEffect(() => {
    const loadOffers = async () => {
      const data = await getPriceOffers(conversationId);
      setOffers(data);
    };

    loadOffers();
  }, [conversationId]);

  const handlePropose = async () => {
    const amount = parseInt(proposedPrice.replace(/\D/g, ''));
    if (amount && amount > 0) {
      setLoading(true);
      const newOffer = await createPriceOffer({
        bookingId,
        conversationId,
        totalAmount: amount,
      });
      setOffers([...offers, newOffer]);
      setProposedPrice('');
      setLoading(false);
    }
  };

  const handleAccept = async (offerId: string) => {
    setLoading(true);
    const updated = await acceptPriceOffer(offerId);
    setOffers(offers.map((o) => (o.id === offerId ? updated : o)));
    setLoading(false);
  };

  const handleReject = async (offerId: string) => {
    setLoading(true);
    const updated = await rejectPriceOffer(offerId);
    setOffers(offers.map((o) => (o.id === offerId ? updated : o)));
    setLoading(false);
  };

  return (
    <Card>
      <Card.Header>
        <strong>Thương lượng giá</strong>
      </Card.Header>
      <Card.Body>
        <div className="mb-3">
          <div className="text-muted small">Giá hiện tại</div>
          <div className="fs-5 fw-bold text-primary">
            {formatPrice(currentBookingPrice)}
          </div>
        </div>

        {!pendingOffer ? (
          <div className="mb-3">
            <Form.Label>Đề xuất giá mới</Form.Label>
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Nhập giá..."
                value={proposedPrice}
                onChange={(e) => setProposedPrice(e.target.value)}
                disabled={loading}
              />
              <Button onClick={handlePropose} disabled={loading || !proposedPrice}>
                Đề xuất
              </Button>
            </div>
          </div>
        ) : (
          <div className="mb-3">
            <div className="alert alert-info">
              <div className="fw-bold">Đề xuất đang chờ</div>
              <div className="fs-5">{formatPrice(pendingOffer.totalAmount)}</div>
              {pendingOffer.sender.id !== currentUserId && (
                <div className="mt-2 d-flex gap-2">
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => handleAccept(pendingOffer.id)}
                    disabled={loading}
                  >
                    Chấp nhận
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleReject(pendingOffer.id)}
                    disabled={loading}
                  >
                    Từ chối
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {offerHistory.length > 0 && (
          <div>
            <div className="text-muted small mb-2">Lịch sử đề xuất</div>
            <ListGroup variant="flush">
              {offerHistory.map((offer) => (
                <ListGroup.Item key={offer.id} className="px-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <div>{formatPrice(offer.totalAmount)}</div>
                      <div className="text-muted small">
                        {formatDate(offer.createdAt)}
                      </div>
                    </div>
                    <span
                      className={`badge ${
                        offer.status === 'ACCEPTED' ? 'bg-success' : 'bg-danger'
                      }`}
                    >
                      {offer.status === 'ACCEPTED' ? 'Đã chấp nhận' : 'Đã từ chối'}
                    </span>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
