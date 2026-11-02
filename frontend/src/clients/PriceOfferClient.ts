export interface CreatePriceOfferRequest {
  bookingId: string;
  conversationId: string;
  totalAmount: number;
  message?: string;
}

export interface PriceOfferResponse {
  id: string;
  booking: {
    id: string;
    bookingCode: string;
  };
  sender: {
    id: string;
    name: string;
  };
  totalAmount: number;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  message?: string;
  createdAt: number;
}

const now = Date.now();
const yesterday = now - 24 * 60 * 60 * 1000;
const twoHoursAgo = now - 2 * 60 * 60 * 1000;

const mockOffers: { [key: string]: PriceOfferResponse[] } = {
  'conv-1': [
    {
      id: 'offer-1',
      booking: {
        id: 'booking-1',
        bookingCode: 'GC-88294',
      },
      sender: {
        id: 'user-customer-1',
        name: 'Nguyễn Văn A',
      },
      totalAmount: 380000,
      status: 'REJECTED',
      createdAt: yesterday,
    },
    {
      id: 'offer-2',
      booking: {
        id: 'booking-1',
        bookingCode: 'GC-88294',
      },
      sender: {
        id: 'user-customer-1',
        name: 'Nguyễn Văn A',
      },
      totalAmount: 400000,
      status: 'PENDING',
      createdAt: twoHoursAgo,
    },
  ],
};

let offerCounter = 2;

export const createPriceOffer = async (
  request: CreatePriceOfferRequest
): Promise<PriceOfferResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newOffer: PriceOfferResponse = {
        id: `offer-${++offerCounter}`,
        booking: {
          id: request.bookingId,
          bookingCode: 'GC-88294',
        },
        sender: {
          id: 'user-customer-1',
          name: 'Nguyễn Văn A',
        },
        totalAmount: request.totalAmount,
        status: 'PENDING',
        message: request.message,
        createdAt: Date.now(),
      };

      if (!mockOffers[request.conversationId]) {
        mockOffers[request.conversationId] = [];
      }
      mockOffers[request.conversationId].push(newOffer);

      resolve(newOffer);
    }, 300);
  });
};

export const acceptPriceOffer = async (offerId: string): Promise<PriceOfferResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let foundOffer: PriceOfferResponse | undefined;
      Object.values(mockOffers).forEach((offers) => {
        const offer = offers.find((o) => o.id === offerId);
        if (offer) {
          offer.status = 'ACCEPTED';
          foundOffer = offer;
        }
      });
      resolve(foundOffer!);
    }, 300);
  });
};

export const rejectPriceOffer = async (offerId: string): Promise<PriceOfferResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let foundOffer: PriceOfferResponse | undefined;
      Object.values(mockOffers).forEach((offers) => {
        const offer = offers.find((o) => o.id === offerId);
        if (offer) {
          offer.status = 'REJECTED';
          foundOffer = offer;
        }
      });
      resolve(foundOffer!);
    }, 300);
  });
};

export const getPriceOffers = async (
  conversationId: string
): Promise<PriceOfferResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...(mockOffers[conversationId] || [])]);
    }, 200);
  });
};
