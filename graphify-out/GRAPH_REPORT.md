# Graph Report - go_cook_helper  (2026-11-02)

## Corpus Check
- 537 files · ~140,408 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2914 nodes · 7601 edges · 180 communities (142 shown, 38 thin omitted)
- Extraction: 93% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 494 edges (avg confidence: 0.85)
- Token cost: 21,320 input · 8,430 output

## Community Hubs (Navigation)
- Frontend Auth & Routing
- Menu Catalog & Search
- Java Annotations & Enums
- Email & Data Models
- Pagination & Collections
- Admin Menu Controller
- Axios HTTP Client
- Transaction & Service Layer
- Admin Dish Controller
- Testing Framework
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 59
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68
- Community 69
- Community 70
- Community 71
- Community 72
- Community 73
- Community 74
- Community 75
- Community 76
- Community 77
- Community 78
- Community 79
- Community 80
- Community 81
- Community 82
- Community 83
- Community 84
- Community 85
- Community 86
- Community 87
- Community 88
- Community 89
- Community 90
- Community 91
- Community 92
- Community 93
- Community 95
- Community 96
- Community 97
- Community 98
- Community 99
- Community 100
- Community 101
- Community 102
- Community 103
- Community 104
- Community 105
- Community 106
- Community 107
- Community 108
- Community 109
- Community 110
- Community 111
- Community 112
- Community 113
- Community 114
- Community 115
- Community 116
- Community 117
- Community 118
- Community 119
- Community 120
- Community 121
- Community 122
- Community 123
- Community 124
- Community 125
- Community 126
- Community 127
- Community 128
- Community 129
- Community 130
- Community 131
- Community 132
- Community 133
- Community 134
- Community 135
- Community 136
- Community 137
- Community 138
- Community 139
- Community 140
- Community 141
- Community 142
- Community 143
- Community 144
- Community 145
- Community 146
- Community 147
- Community 148
- Community 149
- Community 150
- Community 151
- Community 152
- Community 153
- Community 154
- Community 155
- Community 156
- Community 157
- Community 158
- Community 159
- Community 160
- Community 161
- Community 162
- Community 163
- Community 164
- Community 165
- Community 166
- Community 167
- Community 168
- Community 169
- Community 170
- Community 171
- Community 172
- Community 173
- Community 174
- Community 176
- Community 178

## God Nodes (most connected - your core abstractions)
1. `BaseResponse` - 178 edges
2. `User` - 80 edges
3. `react` - 59 edges
4. `ErrorCode` - 59 edges
5. `PaginationResponse` - 50 edges
6. `react-router` - 41 edges
7. `Dish` - 38 edges
8. `Menu` - 38 edges
9. `MenuSearchRequest` - 36 edges
10. `ChefApplicationIntegrationTest` - 35 edges

## Surprising Connections (you probably didn't know these)
- `Fixture` --references--> `ChefApplicationStatus`  [EXTRACTED]
  src/test/java/com/james/LMS/dev/DevAdminSeedTest.java → src/main/java/com/james/LMS/enums/ChefApplicationStatus.java
- `App()` --calls--> `ProfileProvider()`  [EXTRACTED]
  frontend/src/App.tsx → frontend/src/contexts/ProfileContext.tsx
- `AdminOtherResourcePage()` --calls--> `getChefApplication()`  [EXTRACTED]
  frontend/src/components/admin/AdminResourcePage.tsx → frontend/src/clients/AdminClient.ts
- `AdminDataTable()` --calls--> `adminApiErrorMessage()`  [EXTRACTED]
  frontend/src/components/admin/AdminDataTable.tsx → frontend/src/clients/AdminClient.ts
- `AdminMenusPage()` --calls--> `adminApiErrorMessage()`  [EXTRACTED]
  frontend/src/components/admin/AdminMenusPage.tsx → frontend/src/clients/AdminClient.ts

## Import Cycles
- 2-file cycle: `frontend/src/clients/ProfileClients.tsx -> frontend/src/contexts/ProfileContext.tsx -> frontend/src/clients/ProfileClients.tsx`

## Hyperedges (group relationships)
- **Vietnamese Home Meal Composition** — frontend_public_assets_chef_menus_three_kho_braised_dishes, frontend_public_assets_chef_menus_three_fresh_herbs_garnish, frontend_public_assets_chef_menus_three_earthenware_presentation [INFERRED 0.85]
- **Vietnamese Menu Variety Set** — frontend_public_assets_chef_menus_two_canh_xuon_sau, frontend_public_assets_chef_menus_two_bo_xao_can_toi, frontend_public_assets_chef_menus_two_nem_ran, frontend_public_assets_chef_menus_two_bo_mac_can_toi, frontend_public_assets_chef_menus_two_goi_du_du_xanh [EXTRACTED 1.00]
- **GoCook Favicon Visual Identity Composition** — frontend_public_assets_favicon_g_lettermark, frontend_public_assets_favicon_brand_green, frontend_public_assets_favicon_rounded_tile [EXTRACTED 1.00]
- **GO Cook Brand Mark Composition** — frontend_public_assets_go_cook_icon_go_cook_logo_icon, frontend_public_assets_go_cook_icon_chef_hat_motif, frontend_public_assets_go_cook_icon_brand_color_palette, frontend_public_assets_go_cook_icon_svg_accessibility_labeling [INFERRED 0.85]
- **Hero Image Trust-Signal Composition** — frontend_public_assets_hero_home_kitchen_authenticity, frontend_public_assets_hero_live_wok_action, frontend_public_assets_hero_mise_en_place_spread, frontend_public_assets_hero_apron_brand_placement, frontend_public_assets_hero_tropical_daylight_context [INFERRED 0.85]
- **Traditional Vietnamese Home Meal Spread Depicted in meal.png** — frontend_public_assets_meal_ca_kho_to, frontend_public_assets_meal_rau_muong_xao, frontend_public_assets_meal_steamed_rice, frontend_public_assets_meal_nuoc_cham_dip, frontend_public_assets_meal_iced_tea [INFERRED 0.85]
- **European Menu Hero Visual Composition** — frontend_public_assets_menu_european, frontend_public_assets_menu_european_mediterranean_dishes, frontend_public_assets_menu_european_slate_plating, frontend_public_assets_menu_european_candlelit_ambience [INFERRED 0.85]
- **Hotpot Menu Photo Visual Composition** — frontend_public_assets_menu_hotpot, frontend_public_assets_menu_hotpot_clay_pot_braised_dish, frontend_public_assets_menu_hotpot_vietnamese_family_meal_set, frontend_public_assets_menu_hotpot_rustic_home_kitchen_styling [INFERRED 0.85]
- **Traditional Vietnamese table visual language in menu artwork** — frontend_public_assets_menu_hue_image, frontend_public_assets_menu_hue_hue_regional_cuisine, frontend_public_assets_menu_hue_clay_pot_serving, frontend_public_assets_menu_hue_accompaniment_set, frontend_public_assets_menu_hue_styled_table_setting [INFERRED 0.85]
- **Hero Banner Dish Showcase** — frontend_public_assets_menu_south_homepage_hero, frontend_public_assets_menu_south_avocado_quinoa_salad, frontend_public_assets_menu_south_lotus_seed_pumpkin_soup, frontend_public_assets_menu_south_grilled_salmon_plate [INFERRED 0.85]
- **Vegetarian menu category card presentation** — frontend_public_assets_menu_vegetarian_image, frontend_public_assets_menu_vegetarian_vegetarian_menu_category, frontend_public_assets_menu_vegetarian_vietnamese_vegetarian_dish_spread, frontend_public_assets_menu_vegetarian_warm_natural_food_photography_style [INFERRED 0.85]
- **Vegetarian Meal Set Composed for the Menu Photo** — frontend_public_assets_vegetarian_braised_tofu_in_tomato_sauce, frontend_public_assets_vegetarian_stir_fried_water_spinach, frontend_public_assets_vegetarian_mushroom_vegetable_soup, frontend_public_assets_vegetarian_fresh_spring_rolls, frontend_public_assets_vegetarian_peanut_dipping_sauce, frontend_public_assets_vegetarian_steamed_rice_bowls, frontend_public_assets_vegetarian_garnish_condiments [INFERRED 0.85]
- **Vegetarian Category Visual Language (Home-Style, Family-Share Plating)** — frontend_public_assets_vegetarian_image, frontend_public_assets_vegetarian_vegetarian_plant_based_cuisine, frontend_public_assets_vegetarian_vi_etnamese_style_vegetarian_spread, frontend_public_assets_vegetarian_steamed_rice_bowls [INFERRED 0.75]
- **Branded Menu Image Placeholder Strategy** — frontend_public_images_menus_fallback_placeholder_image, frontend_public_images_menus_fallback_gocook_wordmark, frontend_public_images_menus_fallback_updating_caption, frontend_public_images_menus_fallback_missing_asset_pattern [INFERRED 0.85]
- **Menu 001 Cover Home-Meal Spread** — frontend_public_images_menus_menu_001_cover, frontend_public_images_menus_menu_001_cover_braised_pork_belly_with_eggs, frontend_public_images_menus_menu_001_cover_boiled_pork_sliced, frontend_public_images_menus_menu_001_cover_steamed_angled_gourd, frontend_public_images_menus_menu_001_cover_leafy_green_soup, frontend_public_images_menus_menu_001_cover_steamed_white_rice, frontend_public_images_menus_menu_001_cover_woven_bamboo_tray [INFERRED 0.85]
- **Boiled Pork Dipping Sauce Pairing** — frontend_public_images_menus_menu_001_cover_boiled_pork_sliced, frontend_public_images_menus_menu_001_cover_chili_fish_sauce_dip, frontend_public_images_menus_menu_001_cover_fermented_dipping_paste [INFERRED 0.75]
- **Menu 001 Combo Meal Package (4 home-style dishes, 2-3 guests, 239,000 đ)** — frontend_public_images_menus_menu_001_detail_menu_001, frontend_public_images_menus_menu_001_detail_thit_kho_tau, frontend_public_images_menus_menu_001_detail_canh_rau_ngot_nau_thit_bam, frontend_public_images_menus_menu_001_detail_rau_muong_xao_toi, frontend_public_images_menus_menu_001_detail_trung_chien_hanh, frontend_public_images_menus_menu_001_detail_gia_mau_ca_goi_239000, frontend_public_images_menus_menu_001_detail_serves_2_3_guests [INFERRED 0.95]
- **Left-column menu card information stack (brand, category, title, price/servings, disclaimer)** — frontend_public_images_menus_menu_002_cover_gocook_badge, frontend_public_images_menus_menu_002_cover_com_gia_dinh, frontend_public_images_menus_menu_002_cover_mam_com_mien_nam, frontend_public_images_menus_menu_002_cover_price_serving, frontend_public_images_menus_menu_002_cover_sample_footer [INFERRED 0.95]
- **Procedural food illustration cluster on the right half of the cover** — frontend_public_images_menus_menu_002_cover_rice_plate, frontend_public_images_menus_menu_002_cover_sauce_bowl, frontend_public_images_menus_menu_002_cover_star_garnish, frontend_public_images_menus_menu_002_cover_warm_palette [INFERRED 0.85]
- **Menu 002 four-dish list (dishes included in the package)** — frontend_public_images_menus_menu_002_detail_ca_loc_kho_to, frontend_public_images_menus_menu_002_detail_canh_chua_ca_loc, frontend_public_images_menus_menu_002_detail_rau_lang_xao_toi, frontend_public_images_menus_menu_002_detail_trung_chien_thit_bam [EXTRACTED 1.00]
- **Menu 002 package offering: dish list + whole-package price + party size** — frontend_public_images_menus_menu_002_detail_menu_002_detail_illustration, frontend_public_images_menus_menu_002_detail_dishes_in_menu_heading, frontend_public_images_menus_menu_002_detail_gia_mau_ca_goi_319000_vnd, frontend_public_images_menus_menu_002_detail_serves_3_to_4_guests [INFERRED 0.85]
- **Menu Cover Card Layout (brand pill, category eyebrow, title, price line, footer caption)** — frontend_public_images_menus_menu_003_cover_gocook_brand_badge, frontend_public_images_menus_menu_003_cover_com_gia_dinh_category, frontend_public_images_menus_menu_003_cover_mam_com_ca_kho_tieu, frontend_public_images_menus_menu_003_cover_price_279_000_vnd, frontend_public_images_menus_menu_003_cover_thuc_don_minh_hoa_disclaimer [INFERRED 0.85]
- **Illustrated Food Scene (rice plate, clay pot, garnish motif on shared palette)** — frontend_public_images_menus_menu_003_cover_rice_plate_illustration, frontend_public_images_menus_menu_003_cover_clay_pot_illustration, frontend_public_images_menus_menu_003_cover_garnish_star_illustration, frontend_public_images_menus_menu_003_cover_warm_palette [INFERRED 0.75]
- **Menu 003 package offer (four home-style dishes sold as one 279,000 đ bundle for 2–4 guests)** — frontend_public_images_menus_menu_003_detail_dish_ca_basa_kho_tieu, frontend_public_images_menus_menu_003_detail_dish_canh_bau_nau_tom, frontend_public_images_menus_menu_003_detail_dish_dau_dua_xao_toi, frontend_public_images_menus_menu_003_detail_dish_dau_hu_sot_ca_chua, frontend_public_images_menus_menu_003_detail_package_price, frontend_public_images_menus_menu_003_detail_serving_size [INFERRED 0.85]
- **Cover information hierarchy (brand badge, category kicker, dish headline, price/serving line, sample-data footnote)** — frontend_public_images_menus_menu_004_cover_gocook_brand_badge, frontend_public_images_menus_menu_004_cover_com_gia_dinh, frontend_public_images_menus_menu_004_cover_thit_kho_trung, frontend_public_images_menus_menu_004_cover_illustrative_sample_data [INFERRED 0.85]
- **Primitive-shape illustration technique for generated menu covers** — frontend_public_images_menus_menu_004_cover_menu_004_cover, frontend_public_images_menus_menu_004_cover_flat_vector_food_motifs, frontend_public_images_menus_menu_004_cover_warm_palette [INFERRED 0.85]
- **Menu 004 sample package (4 dishes, 359,000 đ for 3-5 guests)** — frontend_public_images_menus_menu_004_detail_dish_list, frontend_public_images_menus_menu_004_detail_thit_kho_tau, frontend_public_images_menus_menu_004_detail_canh_bi_xanh_nau_tom, frontend_public_images_menus_menu_004_detail_cai_ngot_xao_toi, frontend_public_images_menus_menu_004_detail_bap_cai_xao_trung, frontend_public_images_menus_menu_004_detail_package_price_badge, frontend_public_images_menus_menu_004_detail_guest_count_caption [EXTRACTED 1.00]
- **Menu 005 cover card composition (brand, category, dish, price, illustration)** — frontend_public_images_menus_menu_005_cover_menu_005_cover, frontend_public_images_menus_menu_005_cover_gocook_wordmark_badge, frontend_public_images_menus_menu_005_cover_com_gia_dinh, frontend_public_images_menus_menu_005_cover_mam_com_suon_rim, frontend_public_images_menus_menu_005_cover_price_389000vnd_3_5_nguoi, frontend_public_images_menus_menu_005_cover_procedural_plate_illustration, frontend_public_images_menus_menu_005_cover_menu_card_layout [EXTRACTED 0.95]
- **Menu 005 bundled package offer (4 dishes, 389,000 VND, 3-5 guests)** — frontend_public_images_menus_menu_005_detail_menu_005, frontend_public_images_menus_menu_005_detail_suon_non_rim_nuoc_dua, frontend_public_images_menus_menu_005_detail_canh_suon_nau_cu_cai, frontend_public_images_menus_menu_005_detail_rau_muong_xao_toi, frontend_public_images_menus_menu_005_detail_trung_chien_hanh, frontend_public_images_menus_menu_005_detail_gia_mau_ca_goi, frontend_public_images_menus_menu_005_detail_guest_capacity [EXTRACTED 1.00]
- **Menu Cover Card Layout (badge / eyebrow / headline / price / disclosure + food art)** — frontend_public_images_menus_menu_006_cover_image, frontend_public_images_menus_menu_006_cover_gocook_badge, frontend_public_images_menus_menu_006_cover_com_gia_dinh_category, frontend_public_images_menus_menu_006_cover_mam_com_ga_kho_gung_title, frontend_public_images_menus_menu_006_cover_price_serving_block, frontend_public_images_menus_menu_006_cover_thuc_don_minh_hoa_caption, frontend_public_images_menus_menu_006_cover_rice_plate_illustration [EXTRACTED 1.00]
- **Gà Kho Ginger Tray Visual Composition (rice plate, nước chấm bowl, star anise garnish)** — frontend_public_images_menus_menu_006_cover_mam_com_ga_kho_gung_title, frontend_public_images_menus_menu_006_cover_rice_plate_illustration, frontend_public_images_menus_menu_006_cover_dipping_sauce_bowl, frontend_public_images_menus_menu_006_cover_star_anise_motif, frontend_public_images_menus_menu_006_cover_price_serving_block [INFERRED 0.85]
- **Menu 006 package dish set (4 Vietnamese home-style dishes priced as one bundle)** — frontend_public_images_menus_menu_006_detail_ga_kho_gung, frontend_public_images_menus_menu_006_detail_canh_bido_nau_xuong, frontend_public_images_menus_menu_006_detail_su_su_xao_toi, frontend_public_images_menus_menu_006_detail_trung_chien_thit_bam, frontend_public_images_menus_menu_006_detail_gia_mau_ca_goi [INFERRED 0.85]
- **Menu cover card layout (brand pill + category kicker + title + price line + disclaimer + food scene)** — frontend_public_images_menus_menu_007_cover_gocook_badge, frontend_public_images_menus_menu_007_cover_com_gia_dinh, frontend_public_images_menus_menu_007_cover_canh_cua_dong, frontend_public_images_menus_menu_007_cover_price_serving, frontend_public_images_menus_menu_007_cover_illustrative_disclaimer [INFERRED 0.85]
- **Menu 007 bundled northern home-style meal (4 dishes priced as one package for 3-4 guests)** — frontend_public_images_menus_menu_007_detail_menu_007, frontend_public_images_menus_menu_007_detail_dish_canh_cua_rau_day, frontend_public_images_menus_menu_007_detail_dish_thit_ba_chi_rang_chay_canh, frontend_public_images_menus_menu_007_detail_dish_rau_cu_luoc_cham_kho_quet, frontend_public_images_menus_menu_007_detail_dish_trung_chien_hanh, frontend_public_images_menus_menu_007_detail_package_sample_price, frontend_public_images_menus_menu_007_detail_serving_capacity [INFERRED 0.85]
- **Menu detail mockup presentation contract (card layout, brand palette, placeholder disclosure)** — frontend_public_images_menus_menu_007_detail, frontend_public_images_menus_menu_007_detail_brand_palette, frontend_public_images_menus_menu_007_detail_placeholder_asset [EXTRACTED 0.95]
- **GoCook Menu Cover Layout Pattern (Badge / Category Eyebrow / Title / Price / Plate)** — frontend_public_images_menus_menu_008_cover, frontend_public_images_menus_menu_008_cover_gocook_brand_badge, frontend_public_images_menus_menu_008_cover_com_gia_dinh_category, frontend_public_images_menus_menu_008_cover_bua_com_tom_rim_dish, frontend_public_images_menus_menu_008_cover_price_serving_spec, frontend_public_images_menus_menu_008_cover_rice_plate_composition, frontend_public_images_menus_menu_008_cover_warm_palette_rationale [INFERRED 0.85]
- **Vector SVG Placeholder Strategy for Seed Menu Images (no photo or Cloudinary asset needed)** — frontend_public_images_menus_menu_008_cover, frontend_public_images_menus_menu_008_cover_rice_plate_composition, frontend_public_images_menus_menu_008_cover_illustrative_disclaimer [INFERRED 0.75]
- **Menu 008 bundled dish set priced as one package** — frontend_public_images_menus_menu_008_detail_dish_tom_rim_thit_ba_chi, frontend_public_images_menus_menu_008_detail_dish_canh_rau_den_nau_tom, frontend_public_images_menus_menu_008_detail_dish_cai_thia_xao_nam, frontend_public_images_menus_menu_008_detail_dish_dau_hu_sot_ca_chua, frontend_public_images_menus_menu_008_detail_price_badge [INFERRED 0.85]
- **Menu Cover Typographic Hierarchy: brand badge, category, dish title, price, watermark** — frontend_public_images_menus_menu_009_cover_gocook_brand_badge, frontend_public_images_menus_menu_009_cover_com_gia_dinh_category, frontend_public_images_menus_menu_009_cover_mam_com_ca_thu_sot_ca_dish, frontend_public_images_menus_menu_009_cover_price_and_servings, frontend_public_images_menus_menu_009_cover_thuc_don_minh_hoa_placeholder [INFERRED 0.95]
- **Programmatically Generated Sample Menu Cover Asset** — frontend_public_images_menus_menu_009_cover_menu_009_cover, frontend_public_images_menus_menu_009_cover_brand_color_palette, frontend_public_images_menus_menu_009_cover_split_layout, frontend_public_images_menus_menu_009_cover_top_down_plate_illustration [INFERRED 0.85]
- **Menu 009 home-style Vietnamese dish set** — frontend_public_images_menus_menu_009_detail_dish_ca_thu_sot_ca_chua, frontend_public_images_menus_menu_009_detail_dish_canh_ca_chua_trung, frontend_public_images_menus_menu_009_detail_dish_rau_muong_xao_toi, frontend_public_images_menus_menu_009_detail_dish_trung_chien_hanh, frontend_public_images_menus_menu_009_detail_price_399000 [EXTRACTED 1.00]
- **Menu Cover Card Template (badge + category + title + price/servings + disclaimer + food art)** — frontend_public_images_menus_menu_010_cover_gocook_badge, frontend_public_images_menus_menu_010_cover_com_gia_dinh_category, frontend_public_images_menus_menu_010_cover_ca_loc_kho_to_dish, frontend_public_images_menus_menu_010_cover_price_and_servings, frontend_public_images_menus_menu_010_cover_illustrative_disclaimer, frontend_public_images_menus_menu_010_cover_plate_illustration [INFERRED 0.95]
- **Menu 010 Whole-Package Offering (4 dishes, 389,000 đ, 3–5 guests)** — frontend_public_images_menus_menu_010_detail_menu_010, frontend_public_images_menus_menu_010_detail_ca_loc_kho_to, frontend_public_images_menus_menu_010_detail_canh_cai_xanh_nau_thit_bam, frontend_public_images_menus_menu_010_detail_dau_dua_xao_toi, frontend_public_images_menus_menu_010_detail_trung_chien_hanh, frontend_public_images_menus_menu_010_detail_gia_mau_ca_goi, frontend_public_images_menus_menu_010_detail_three_to_five_guests [EXTRACTED 1.00]
- **Hardcoded Frontend Mock Assets for Menu Detail UI** — frontend_public_images_menus_menu_010_detail, frontend_public_images_menus_menu_010_detail_menu_010, frontend_public_images_menus_menu_010_detail_gia_mau_ca_goi [INFERRED 0.75]
- **Menu Cover Card Layout (GOCOOK chip, category eyebrow, title, price line, food art, footnote)** — frontend_public_images_menus_menu_011_cover_com_gia_dinh, frontend_public_images_menus_menu_011_cover_bua_com_ga_ro_ti, frontend_public_images_menus_menu_011_cover_price_469_000_vnd_4_6_nguoi, frontend_public_images_menus_menu_011_cover_plate_illustration, frontend_public_images_menus_menu_011_cover_warm_earth_palette, frontend_public_images_menus_menu_011_cover_mockup_disclosure [INFERRED 0.85]
- **Menu 011 four-dish set** — frontend_public_images_menus_menu_011_detail_ga_ro_ti, frontend_public_images_menus_menu_011_detail_canh_ga_nau_nam, frontend_public_images_menus_menu_011_detail_cai_ngot_xao_toi, frontend_public_images_menus_menu_011_detail_trung_hap_thit [EXTRACTED 1.00]
- **Menu 012 cover composition (brand, category, dish title, price, servings, illustration)** — frontend_public_images_menus_menu_012_cover_gocook_brand, frontend_public_images_menus_menu_012_cover_com_gia_dinh, frontend_public_images_menus_menu_012_cover_mam_com_rau_cu_va_dau, frontend_public_images_menus_menu_012_cover_price_269000, frontend_public_images_menus_menu_012_cover_servings_2_4, frontend_public_images_menus_menu_012_cover_plate_illustration [EXTRACTED 1.00]
- **Menu 012 Combo Dishes** — frontend_public_images_menus_menu_012_detail_dau_hu_sot_ca_chua, frontend_public_images_menus_menu_012_detail_canh_he_nau_dau_hu, frontend_public_images_menus_menu_012_detail_cai_thia_xao_nam, frontend_public_images_menus_menu_012_detail_bi_do_xao_toi [EXTRACTED 1.00]
- **menu-013 Cover Composition** — frontend_public_images_menus_menu_013_cover_gocook, frontend_public_images_menus_menu_013_cover_com_van_phong, frontend_public_images_menus_menu_013_cover_combo_com_suon_nuong, frontend_public_images_menus_menu_013_cover_price_119000, frontend_public_images_menus_menu_013_cover_serving_1_2 [EXTRACTED 1.00]
- **menu-013 Food Illustration Set** — frontend_public_images_menus_menu_013_cover_plate_illustration, frontend_public_images_menus_menu_013_cover_side_dish, frontend_public_images_menus_menu_013_cover_herb_accent [INFERRED 0.85]
- **Menu 013 Three-Dish Package** — frontend_public_images_menus_menu_013_detail_com_suon_nuong, frontend_public_images_menus_menu_013_detail_canh_ca_chua_trung, frontend_public_images_menus_menu_013_detail_cai_ngot_xao_toi [EXTRACTED 1.00]
- **Menu 014 Cover Identity Set** — frontend_public_images_menus_menu_014_cover_menu_cover_illustration, frontend_public_images_menus_menu_014_cover_gocook_brand, frontend_public_images_menus_menu_014_cover_combo_com_ga_xoi_mo, frontend_public_images_menus_menu_014_cover_price_and_serving, frontend_public_images_menus_menu_014_cover_color_palette [INFERRED 0.85]
- **Menu 014 dish set** — frontend_public_images_menus_menu_014_detail_com_ga_xoi_mo, frontend_public_images_menus_menu_014_detail_canh_bi_xanh_nau_tom, frontend_public_images_menus_menu_014_detail_rau_muong_xao_toi, frontend_public_images_menus_menu_014_detail_package_price [INFERRED 0.85]
- **Menu 015 cover composition** — frontend_public_images_menus_menu_015_cover_menu_015, frontend_public_images_menus_menu_015_cover_gocook, frontend_public_images_menus_menu_015_cover_combo_com_bo_luc_lac, frontend_public_images_menus_menu_015_cover_price_149000, frontend_public_images_menus_menu_015_cover_plate_illustration [EXTRACTED 1.00]
- **GoCook Menu 015 Dish Set** — frontend_public_images_menus_menu_015_detail_com_bo_luc_lac, frontend_public_images_menus_menu_015_detail_canh_bi_do_nau_xuong, frontend_public_images_menus_menu_015_detail_su_su_xao_toi [EXTRACTED 1.00]
- **Menu 016 Dish Composition** — frontend_public_images_menus_menu_016_cover_rice_plate_illustration, frontend_public_images_menus_menu_016_cover_herb_garnish_dots, frontend_public_images_menus_menu_016_cover_chili_accents, frontend_public_images_menus_menu_016_cover_drink_cup [INFERRED 0.85]
- **Menu Card Metadata** — frontend_public_images_menus_menu_016_cover_gocook_brand, frontend_public_images_menus_menu_016_cover_com_van_phong_category, frontend_public_images_menus_menu_016_cover_combo_com_ga_ro_ti, frontend_public_images_menus_menu_016_cover_price_139000, frontend_public_images_menus_menu_016_cover_serves_1_2_people [EXTRACTED 1.00]
- **Menu 016 three-dish lineup with package price** — frontend_public_images_menus_menu_016_detail, frontend_public_images_menus_menu_016_detail_com_ga_ro_ti, frontend_public_images_menus_menu_016_detail_canh_rong_bien_nau_thit_bam, frontend_public_images_menus_menu_016_detail_cai_thia_xao_nam, frontend_public_images_menus_menu_016_detail_gia_mau_ca_goi [INFERRED 0.85]
- **Menu 017 Cover Visual Composition** — frontend_public_images_menus_menu_017_cover_gocook, frontend_public_images_menus_menu_017_cover_com_van_phong, frontend_public_images_menus_menu_017_cover_combo_com_thit_kho, frontend_public_images_menus_menu_017_cover_plate_illustration, frontend_public_images_menus_menu_017_cover_green_palette [INFERRED 0.85]
- **Menu 017 Dish Composition** — frontend_public_images_menus_menu_017_detail_com_thit_kho_trung, frontend_public_images_menus_menu_017_detail_canh_rau_ngot_thit_bam, frontend_public_images_menus_menu_017_detail_rau_muong_xao_toi, frontend_public_images_menus_menu_017_detail_goi_menu_119000d, frontend_public_images_menus_menu_017_detail_khach_1_2 [EXTRACTED 1.00]
- **Menu 018 Cover Card Composition** — frontend_public_images_menus_menu_018_cover_gocook_brand, frontend_public_images_menus_menu_018_cover_com_van_phong, frontend_public_images_menus_menu_018_cover_combo_com_ca_kho, frontend_public_images_menus_menu_018_cover_price_portion_label, frontend_public_images_menus_menu_018_cover_rice_bowl_illustration [EXTRACTED 1.00]
- **Menu 020 Dish Set** — frontend_public_images_menus_menu_020_detail_com_chien_duong_chau, frontend_public_images_menus_menu_020_detail_canh_ca_chua_trung, frontend_public_images_menus_menu_020_detail_rau_cu_luoc_kho_quet [EXTRACTED 1.00]

## Communities (180 total, 38 thin omitted)

### Community 0 - "Frontend Auth & Routing"
Cohesion: 0.09
Nodes (53): NotFound(), MenuForm(), SellerDemoLayout(), links, SellerWorkspace(), SellerDemoContext, SellerDemoProvider(), addSlot() (+45 more)

### Community 1 - "Menu Catalog & Search"
Cohesion: 0.05
Nodes (47): CatalogMenu, displayPrice(), normalizeSearch(), ChefCardProps, formatPrice(), MenuCard(), MenuCardProps, HomeChefsProps (+39 more)

### Community 2 - "Java Annotations & Enums"
Cohesion: 0.08
Nodes (17): PermissionDeniedException, BookingPriceOfferService, BookingRequestService, ChatConversationAttachmentService, ChatConversationService, ChefScheduleService, EmailVerificationGuard, BookingPriceOfferServiceImpl (+9 more)

### Community 3 - "Email & Data Models"
Cohesion: 0.11
Nodes (17): BaseCriteria, BecomeChefRequest, ForgotPasswordRequest, InstructionRequest, LoginRequest, RefreshTokenRequest, ResendVerificationRequest, ResetPasswordRequest (+9 more)

### Community 5 - "Admin Menu Controller"
Cohesion: 0.10
Nodes (12): AdminMenuController, AdminMenuFacade, AdminMenuFacadeImpl, AdminMenuStatusRequest, AdminMenuUpdateRequest, AdminMenuResponse, CategorySummary, DishSummary (+4 more)

### Community 6 - "Axios HTTP Client"
Cohesion: 0.07
Nodes (32): axiosClient, refreshClient, RetryableRequestConfig, CurriculumWishListResponse, ApiResponse, getAllMenus(), getMenusPage(), MenuApiCategory (+24 more)

### Community 7 - "Transaction & Service Layer"
Cohesion: 0.11
Nodes (12): EntityNotFoundException, BookingFacadeImpl, DishFacadeImpl, MenuFacadeImpl, CreateBookingRequest, BookingService, DishService, BookingServiceImpl (+4 more)

### Community 8 - "Admin Dish Controller"
Cohesion: 0.10
Nodes (9): AdminDishController, AdminDishModeration, AdminDishFacade, AdminDishFacadeImpl, AdminDishModerationRepository, AdminDishStatusRequest, AdminDishResponse, AdminDishService (+1 more)

### Community 9 - "Testing Framework"
Cohesion: 0.10
Nodes (10): MenuSort, LATEST, NAME_ASC, NAME_DESC, PRICE_ASC, PRICE_DESC, MenuDishRepository, MenuSearchRequest (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.12
Nodes (36): adminReadEndpoint(), AdminTablePage, AdminTableSort, ApiEnvelope, categoryCache, chefApplication(), chefDate(), chefPage() (+28 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (23): bookingApi, searchDishes(), DishPicker(), DishPickerProps, RequestSummary(), RequestSummaryProps, SelectedDishList(), SelectedDishListProps (+15 more)

### Community 12 - "Community 12"
Cohesion: 0.08
Nodes (8): MessageMailDTO, EmailService, EmailServiceImpl, MailConsumerServiceIml, MailProducerServiceImpl, MailConsumerService, MailProducerService, MailUtil

### Community 13 - "Community 13"
Cohesion: 0.13
Nodes (4): UserController, LocationFacade, UserFacade, BaseResponse

### Community 14 - "Community 14"
Cohesion: 0.11
Nodes (4): Dish, DishRepository, DishServiceImpl, DishServiceImplTest

### Community 15 - "Community 15"
Cohesion: 0.14
Nodes (11): ChefApplicationController, ChefApplicationStatus, APPROVED, PENDING, REJECTED, SUSPENDED, ChefApplicationFacade, ChefApplicationFacadeImpl (+3 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (31): adminApiErrorMessage(), adminWriteEndpoint(), clearAdminTableCache(), reviewAdminUser(), reviewChefApplication(), saveAdminRecord(), ActionInfo, actions (+23 more)

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (28): fetchMenuPage(), formatPrice(), getAdminMenuCategories(), getAdminMenuDetail(), getAdminMenusPage(), JsonObject, MenuSort, payload() (+20 more)

### Community 18 - "Community 18"
Cohesion: 0.08
Nodes (11): ChatController, ChatMessage, ChatMessageType, FILE, IMAGE, SYSTEM, TEXT, ChatMessageResponse (+3 more)

### Community 20 - "Community 20"
Cohesion: 0.10
Nodes (25): getCategories(), getDishes(), createMenu(), CreateMenuRequest, Dishes(), DishesChild(), initialState, Menu() (+17 more)

### Community 21 - "Community 21"
Cohesion: 0.14
Nodes (19): months, Props, HomeBenefits(), HomeBottomCTA(), HomeChefs(), HomeHero(), HomeHeroProps, HomeListState() (+11 more)

### Community 22 - "Community 22"
Cohesion: 0.14
Nodes (3): LocationController, UserControllerV2, UserFacadeV2

### Community 23 - "Community 23"
Cohesion: 0.11
Nodes (5): CategoryRepository, DevAdminSeedTest, Fixture, LmsApplicationTests, PublicMenuVisibilityIntegrationTest

### Community 24 - "Community 24"
Cohesion: 0.13
Nodes (25): adminDishError(), ApiResponse, getAdminDish(), getAdminDishesPage(), mapDish(), Page, payload(), updateAdminDish() (+17 more)

### Community 25 - "Community 25"
Cohesion: 0.12
Nodes (3): LoggingFilter, AuthTokenProviderInterceptor, PublicEndpointsValidatorUtil

### Community 26 - "Community 26"
Cohesion: 0.08
Nodes (30): POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER, RABBITMQ_DEFAULT_PASS, RABBITMQ_DEFAULT_USER, interval, retries, test (+22 more)

### Community 27 - "Community 27"
Cohesion: 0.09
Nodes (6): CategoryController, CategoryFacade, CategoryFacadeImpl, CategoryResponse, KeySetPaginationResponse, CategoryService

### Community 28 - "Community 28"
Cohesion: 0.06
Nodes (29): ErrorCode, BOOKING_NOT_FOUND, CATEGORY_NOT_FOUND, CHAT_CONVERSATION_NOT_FOUND, CHAT_MESSAGE_NOT_FOUND, CHEF_PROFILE_NOT_FOUND, COMPANY_ADMIN_ROLE_ALREADY_EXISTS, DISH_NOT_FOUND (+21 more)

### Community 29 - "Community 29"
Cohesion: 0.11
Nodes (16): EmailVerificationKey, OTP_KEY, RETRY_KEY, InstructorEnum, INSTRUCTOR_KEY, MessageType, READ_LECTURER_INFO_AND_CACHE, ResetPasswordKey (+8 more)

### Community 32 - "Community 32"
Cohesion: 0.12
Nodes (19): login(), signup(), RememberMe(), RememberMeChild(), getCookie(), RememberMeContext, RememberMeInfo, RememberMeProvider() (+11 more)

### Community 33 - "Community 33"
Cohesion: 0.07
Nodes (4): BaseEntity, ChatMessageAttachment, MenuDish, UserRole

### Community 34 - "Community 34"
Cohesion: 0.14
Nodes (10): BookingRequest, BookingPriceOfferRepository, BookingRepository, BookingRequestRepository, ChatConversationAttachmentRepository, ChatConversationRepository, ChatMessageRepository, ChefReportRepository (+2 more)

### Community 35 - "Community 35"
Cohesion: 0.11
Nodes (9): FrontendController, HomeController, ReactFrontendController, MenuImage, CategoryItem, ChefItem, HomeResponse, MenuItem (+1 more)

### Community 36 - "Community 36"
Cohesion: 0.12
Nodes (5): CategorySelectionContext, Menu, MenuRepository, MenuSpecifications, HomeServiceImpl

### Community 37 - "Community 37"
Cohesion: 0.12
Nodes (3): User, UserRepository, UserServiceImpl

### Community 38 - "Community 38"
Cohesion: 0.09
Nodes (4): ChefProfileDTO, UserDetailResponse, ChefProfileService, DataJpaTests

### Community 40 - "Community 40"
Cohesion: 0.12
Nodes (7): FileType, IMAGE, VIDEO, UploadFileException, CloudinaryService, MenuImage, CloudinaryServiceImpl

### Community 41 - "Community 41"
Cohesion: 0.12
Nodes (6): BookingController, BookingFacade, BookingSearchRequest, BookingResponse, DishItem, PaginationResponse

### Community 42 - "Community 42"
Cohesion: 0.16
Nodes (6): AdministrativeUnit, Province, Ward, ProvinceRepository, ProvinceServiceImpl, WardService

### Community 43 - "Community 43"
Cohesion: 0.15
Nodes (15): logout(), AdminFrame(), AdminLayout(), navigation, Footer(), Navbar(), NavbarContent(), useProfile() (+7 more)

### Community 45 - "Community 45"
Cohesion: 0.17
Nodes (6): AdminUserController, AdminUserFacade, AdminUserFacadeImpl, AdminUserStatusRequest, AdminUserResponse, AdminUserService

### Community 46 - "Community 46"
Cohesion: 0.08
Nodes (4): Booking, BookingItemDish, ChefReport, Payment

### Community 47 - "Community 47"
Cohesion: 0.15
Nodes (7): TokenType, ACCESS_TOKEN, FORGOT_PASSWORD, REFRESH_TOKEN, RoleRepository, CacheService, AdminUserIntegrationTest

### Community 48 - "Community 48"
Cohesion: 0.20
Nodes (4): InvalidOTPException, UserAlreadyExistException, RestHandlerException, ExceptionResponse

### Community 51 - "Community 51"
Cohesion: 0.19
Nodes (3): ChefProfile, ChefProfileRepository, ChefApplicationServiceImpl

### Community 52 - "Community 52"
Cohesion: 0.13
Nodes (6): Role, RoleEnum, ROLE_CHEF, ROLE_SYSTEM_ADMIN, ROLE_USER, RoleServiceImpl

### Community 53 - "Community 53"
Cohesion: 0.11
Nodes (4): LocationFacadeImpl, ProvinceResponse, WardResponse, ProvinceService

### Community 55 - "Community 55"
Cohesion: 0.13
Nodes (16): getAdminDashboard(), adminDemoRows, emptyCollection, useAdminCollection(), AdminDashboard(), count(), Dashboard, shortcuts (+8 more)

### Community 56 - "Community 56"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx (+11 more)

### Community 57 - "Community 57"
Cohesion: 0.11
Nodes (7): BookingPriceOffer, ChatConversation, ChatConversationStatus, ACTIVE, CLOSED, ChatConversationResponse, UserInfo

### Community 58 - "Community 58"
Cohesion: 0.15
Nodes (17): devDependencies, oxlint@^1.71.0, @types/node@^24.13.2, @types/react@^19.2.17, @types/react-dom@^19.2.3, vite@^8.1.1, @vitejs/plugin-react@^6.0.3, name (+9 more)

### Community 59 - "Community 59"
Cohesion: 0.15
Nodes (4): DishController, DishFacade, DishSearchRequest, DishResponse

### Community 60 - "Community 60"
Cohesion: 0.11
Nodes (18): name, charset, enabled, force, logging, pattern, max-file-size, max-request-size (+10 more)

### Community 61 - "Community 61"
Cohesion: 0.11
Nodes (18): dependencies, axios@^1.21.0, datatables.net-bs5@^3.1.4, datatables.net-react@^2.0.0, @fortawesome/fontawesome-svg-core@^7.3.1, @fortawesome/free-brands-svg-icons@^7.3.1, @fortawesome/free-solid-svg-icons@^7.3.1, @fortawesome/react-fontawesome@^3.5.0 (+10 more)

### Community 62 - "Community 62"
Cohesion: 0.19
Nodes (4): RoleFacadeImpl, RoleFacade, UserDetailsAuthenticationProviderInterceptor, RoleService

### Community 63 - "Community 63"
Cohesion: 0.20
Nodes (11): formatPrice(), getAdminMenuCategories(), getAdminMenusPage(), JsonObject, MenuSort, payload(), record(), toMenuRow() (+3 more)

### Community 64 - "Community 64"
Cohesion: 0.24
Nodes (12): findWards(), getAllProvinces(), becomeChef(), BecomeChefForm(), BecomeChefFormChild(), BecomeChefContext, BecomeChefProps, BecomeChefProvider() (+4 more)

### Community 65 - "Community 65"
Cohesion: 0.15
Nodes (11): DraftProfile(), PasswordForm, ProfileForm, AppContext, AppContextType, AppProviderProps, Notification, NotifyOptions (+3 more)

### Community 66 - "Community 66"
Cohesion: 0.14
Nodes (3): MenuController, MenuFacade, UpsetMenuAssetRequest

### Community 69 - "Community 69"
Cohesion: 0.21
Nodes (4): MenuAsset, MenuAssetRepository, MenuAssetServiceImpl, MenuAssetService

### Community 70 - "Community 70"
Cohesion: 0.23
Nodes (6): typescript@~6.0.2, chef, requests, { outputText }, { outputText }, typescript

### Community 71 - "Community 71"
Cohesion: 0.23
Nodes (10): AdminMenuFilters, changeAdminMenuVisibility(), getAdminMenuCategories(), AdminMenusPage(), updateVisibility(), emptyFilters, FilterForm, menuImages() (+2 more)

### Community 74 - "Community 74"
Cohesion: 0.20
Nodes (9): bootstrap@^5.3.8, react-dom@^19.2.7, @vidstack/react@^1.15.6, App(), AppProvider(), router, bootstrap, react-dom (+1 more)

### Community 75 - "Community 75"
Cohesion: 0.27
Nodes (9): CƠM GIA ĐÌNH Category Eyebrow (Family Meals), Dipping Sauce Bowl Overlay (nước chấm, dark #6A3F23 with two solids), GOCOOK Brand Pill Badge (top-left, brown #6A3F23 fill), Menu 006 Cover Illustration (Mâm cơm gà kho gừng), Mâm cơm gà kho gừng Headline (Ginger-Braised Chicken Rice Tray), Price & Serving Meta (369.000 đ · 3–5 người), Overhead Rice Plate (rimmed circle, 24 rice grains, 7 herb leaves, 6 carrot dots), Star-Anise / Spice-Blossom Motif (8 rotated petals around a centre) (+1 more)

### Community 76 - "Community 76"
Cohesion: 0.21
Nodes (10): Cơm gia đình (family rice meal category), GOCOOK, Eight-petal green flower badge, Herb leaf garnish accents, Mâm cơm rau củ và đậu (vegetable and bean family rice tray), Menu 012 cover illustration, Top-view plate illustration with rice, vegetables and chili garnish, 269.000 đ price point (+2 more)

### Community 77 - "Community 77"
Cohesion: 0.18
Nodes (11): Chili Accents (Orange Dots), Cơm Văn Phòng (Office Rice) Category, Combo Cơm Gà Rô Ti, Iced Drink Cup, GOCOOK Brand Mark, Herb Garnish (Green Accents), Illustrative Menu 016 Caption, 139.000 đ Price (+3 more)

### Community 78 - "Community 78"
Cohesion: 0.23
Nodes (8): updateAdminMenuStatus(), AdminMenusPage(), changeStatus(), emptyFilters, FilterValues, imagesFor(), toFilters(), router

### Community 79 - "Community 79"
Cohesion: 0.33
Nodes (3): AdminMenuModeration, AdminMenuModerationRepository, AdminMenuServiceImpl

### Community 80 - "Community 80"
Cohesion: 0.17
Nodes (6): ChefSchedule, ChefScheduleStatus, CANCELLED, COMPLETED, CONFIRMED, HELD

### Community 81 - "Community 81"
Cohesion: 0.22
Nodes (10): Menu 001 Detail Illustration (SVG), Canh rau ngót nấu thịt bằm (Sweet Leaf Soup with Minced Pork), "Các món trong menu" Dish List Section, GIÁ MẪU CẢ GÓI 239,000 đ (Sample Whole-Package Price Badge), GoCook Menu 001 (Combo Meal Package), Rau muống xào tỏi (Stir-Fried Water Spinach with Garlic), Portion Size: 2–3 khách (Serves 2-3 Guests), Thịt kho tàu (Braised Pork in Caramel Sauce) (+2 more)

### Community 82 - "Community 82"
Cohesion: 0.31
Nodes (9): Menu 002 Cover SVG (Mâm cơm miền Nam), Cơm gia đình (menu category label), GOCOOK brand badge (pill, top-left), Mâm cơm miền Nam (menu title), 319.000 đ · 3-4 người (price and serving size), Central rice plate illustration (broken-rice bed with grains, greens, tomato pieces), THỰC ĐƠN MINH HỌA · MENU 002 (sample disclaimer footer), Small dipping-bowl illustration (bottom-right, brown sauce with highlights) (+1 more)

### Community 83 - "Community 83"
Cohesion: 0.25
Nodes (8): Cá lóc kho tộ (clay-pot braised snakehead fish), Canh chua cá lóc (sour soup with snakehead fish), Heading "Các món trong menu" (Dishes in the menu), GIÁ MẪU CẢ GÓI — 319,000 đ (sample whole-package price), GOCOOK Menu 002 Detail Illustration (SVG), Rau lang xào tỏi (stir-fried sweet potato leaves with garlic), 3–4 khách (serves 3-4 guests), Trứng chiên thịt bằm (omelette with minced meat)

### Community 84 - "Community 84"
Cohesion: 0.29
Nodes (9): Clay Pot Cá Kho Illustration (small dark bowl off-plate), CƠM GIA ĐÌNH (Family Meals) Category Label, Slice-Star Garnish Motif (radial green ellipses), GOCOOK Brand Badge (pill, dark brown #6A3F23), Mâm cơm cá kho tiêu (Braised Fish with Black Pepper Home Meal), Menu 003 Cover Image (Mâm cơm cá kho tiêu), Price 279.000 đ · 2–4 người (serving-size caption), Overhead Rice Plate Illustration (rice grains, greens, tomato) (+1 more)

### Community 85 - "Community 85"
Cohesion: 0.24
Nodes (5): AdminDataTable(), badgeTone(), errorMessage(), escapeText(), Props

### Community 87 - "Community 87"
Cohesion: 0.18
Nodes (11): host, password, port, properties, smtp, username, mail, auth (+3 more)

### Community 88 - "Community 88"
Cohesion: 0.38
Nodes (10): Braised Tofu in Tomato Sauce, Fresh Spring Rolls with Rice Vermicelli, Herb, Lime and Chilli Garnish Set, Vegetarian Meal Photo (Frontend Asset), Mushroom and Vegetable Broth Bowl, Peanut Dipping Sauce with Crushed Nuts and Chilli, Steamed Rice Bowls (Shared Staple), Stir-Fried Water Spinach with Garlic (+2 more)

### Community 89 - "Community 89"
Cohesion: 0.44
Nodes (9): Menu 001 Cover Photo - Vietnamese Home-Style Meal on Bamboo Tray, Sliced Boiled Pork (Thit Heo Luoc), Braised Pork Belly with Eggs (Thit Kho Tau), Chili Fish Sauce Dipping Bowl (Nuoc Mam Cham), Thick Brown Fermented Dipping Paste with Spoon, Clear Broth Leafy Green Soup (Canh Rau), Steamed Angled Gourd / Green Squash (Su / Muong Luoc), Steamed White Rice Bowl (+1 more)

### Community 90 - "Community 90"
Cohesion: 0.38
Nodes (8): CƠM GIA ĐÌNH (family-meal menu category), GOCOOK wordmark badge, Mâm cơm sườn rim (dish title), Menu 005 Cover Image (menu-005-cover.svg), MENU 005 (sample menu identifier), 389.000 đ · 3-5 người (price and serving size), Procedural plate illustration (rice grains, herb leaves, sauce bowl, star-cut garnish), Warm brand palette (#6A3F23 / #DF865A / #93B57A on #FFF9ED-#FBEEDC)

### Community 91 - "Community 91"
Cohesion: 0.29
Nodes (9): Menu 005 Detail Card (SVG), Canh suon nau cu cai (spare rib radish soup), Dishes In Menu Section (Cac mon trong menu), Sample Package Price Badge - 389,000 VND, Serves 3-5 Guests, GoCook Menu 005, Rau muong xao toi (garlic stir-fried water morning glory), Suon non rim nuoc dua (coconut-caramelised baby back ribs) (+1 more)

### Community 92 - "Community 92"
Cohesion: 0.24
Nodes (9): GoCook Menu 007 Detail Card (frontend mockup SVG, 1200x800), GoCook warm food palette (cream #FFF9ED/#FBEEDC, terracotta #DF865A, cocoa #6A3F23, herb green #93B57A), Canh cua rau đay (crab soup with water spinach), Rau củ luộc chấm kho quẹt (boiled vegetables with caramelised fish dip), Thịt ba chỉ rang cháy cạnh (caramelised pork belly), Trứng chiên hành (scallion omelette), Menu 007 - Các món trong menu (Dishes in the menu), GIÁ MẪU CẢ GÓI - 329,000 đ (sample whole-package price) (+1 more)

### Community 93 - "Community 93"
Cohesion: 0.27
Nodes (10): Cơm Văn Phòng (Office Rice Category), Combo cơm sườn nướng, Menu Cover Card Template (1200x800), GOCOOK Brand Badge, Green and Amber Brand Palette (#285846 / #EDAF69), Herb (Cucumber/Scallion) Garnish Accent, Overhead Rice Plate Illustration, 119.000 đ Price (+2 more)

### Community 95 - "Community 95"
Cohesion: 0.20
Nodes (6): OrderStatus, CANCELLED, COMPLETED, CONFIRMED, COOKING, PENDING

### Community 96 - "Community 96"
Cohesion: 0.20
Nodes (9): cors, allowed-origins, jwt, accessTokenExpirationTime, refreshTokenExpirationTime, resetPasswordTokenExpirationTime, secretKey, server (+1 more)

### Community 97 - "Community 97"
Cohesion: 0.20
Nodes (10): redis, change-log, host, port, spring, data, liquibase, threads (+2 more)

### Community 98 - "Community 98"
Cohesion: 0.33
Nodes (7): Meal Photo Asset (meal.png), Clay Pot Caramelised Fish (Cá Kho Tộ), Herbed Noodle Bowl with Fish and Tomato, Iced Tea Glass, Chilli Dipping Sauce and Fresh Herb/Lime Sides, Stir-Fried Water Spinach (Rau Muống Xào), Steamed Rice Bowl

### Community 99 - "Community 99"
Cohesion: 0.28
Nodes (8): Bắp cải xào trứng (stir-fried cabbage with egg), Cải ngọt xào tỏi (garlic stir-fried mustard greens), Canh bí xanh nấu tôm (green squash soup with shrimp), Dish list panel — 'Các món trong menu', Caption — '3–5 khách · ảnh minh họa frontend', Menu 004 Detail Illustration (SVG asset), Price badge — 'GIÁ MẪU CẢ GÓI · 359,000 đ', Thịt kho tàu (caramelised pork and eggs)

### Community 100 - "Community 100"
Cohesion: 0.31
Nodes (9): "Các món trong menu" heading, Canh bí đỏ nấu xương (pumpkin soup with bones), Gà kho gừng (ginger braised chicken), GIÁ MẪU CẢ GÓI — 369,000 đ (sample package price badge), GOCOOK · MENU 006 (brand / menu id line), Menu 006 Detail Card (SVG mockup), Footer note: 3–5 khách · ảnh minh họa frontend, Su su xào tỏi (stir-fried chayote with garlic) (+1 more)

### Community 101 - "Community 101"
Cohesion: 0.31
Nodes (7): Warm Brand Palette (brown #6A3F23, terracotta #DF865A, sage #93B57A, cream gradient), CƠM GIA ĐÌNH (Home-Style Family Rice) Menu Category, GOCOOK Brand Badge, Mâm cơm cá thu sốt cà (Mackerel Rice Tray with Tomato Sauce), menu-009-cover.svg — GoCook Menu Cover Illustration, Price 399.000 đ · 3–5 người (serves 3-5), Top-Down Rice Plate Illustration with Herb, Tomato and Sauce Side Bowl

### Community 102 - "Community 102"
Cohesion: 0.42
Nodes (7): Menu 009 Detail Card (SVG, 1200x800), Cá thu sốt cà chua (tomato-braised mackerel), Canh cà chua trứng (tomato and egg soup), Rau muống xào tỏi (garlic stir-fried water spinach), Trứng chiên hành (scallion omelette), Sample bundle price 399,000 đ, Serving size 3–5 guests

### Community 103 - "Community 103"
Cohesion: 0.31
Nodes (6): Menu 010 Cover SVG (Mâm cơm cá lóc kho tộ), Mâm cơm cá lóc kho tộ (Clay-pot Snakehead Fish Rice Tray), CƠM GIA ĐÌNH (Family Meals Category), GOCOOK Brand Badge, Top-down Rice Plate Illustration (rice, herbs, tomato, sauce bowl, star anise), Price 389.000 đ · Serves 3–5 people

### Community 104 - "Community 104"
Cohesion: 0.31
Nodes (9): Bí đỏ xào tỏi, Cải thìa xào nấm, Canh hẹ nấu đậu hũ, Đậu hũ sốt cà chua, GoCook Brand, GoCook Menu 012 Detail Illustration, Combo Menu 012 (Các món trong menu), Sample Package Price 269,000 đ (+1 more)

### Community 105 - "Community 105"
Cohesion: 0.39
Nodes (9): Menu 017 Cover Image, Cơm Văn Phòng (Office Rice Meal), Combo Cơm Thịt Kho, GoCook Brand, Green and Gold Menu Visual Theme, Herb Garnish Motif, Lime Wedge Badge, Circular Rice Plate Illustration (+1 more)

### Community 106 - "Community 106"
Cohesion: 0.22
Nodes (6): PageResult, PaginationParams, UseLoadMorePaginationOptions, UseLoadMorePaginationResult, UsePaginatedApiOptions, UsePaginatedApiResult

### Community 109 - "Community 109"
Cohesion: 0.25
Nodes (6): ProductStatus, DRAFT, HIDDEN, PUBLISHED, SellerProductRequest, SellerProductStatusRequest

### Community 111 - "Community 111"
Cohesion: 0.32
Nodes (7): Cá basa kho tiêu (pepper-braised basa fish), Canh bầu nấu tôm (gourd soup with shrimp), Đậu đũa xào tỏi (yardlong beans stir-fried with garlic), Đậu hũ sốt cà chua (tofu in tomato sauce), GOCOOK Menu 003 Detail Card (1200x800 SVG mockup), GIÁ MẪU CẢ GÓI 279,000 đ (sample whole-package price badge), 2–4 khách (serving-size meta line)

### Community 112 - "Community 112"
Cohesion: 0.43
Nodes (6): Menu 008 Cover — "Bữa cơm tôm rim" (Static SVG Asset), Bữa cơm tôm rim (Braised Caramel Shrimp Rice Meal), Cơm Gia Đình (Home / Family Meal) Menu Category, GOCOOK Brand Badge, Price and Servings Line (359.000 đ · 3–4 people), Illustrated Rice Plate with Shrimp, Rice Grains and Herb Garnish

### Community 113 - "Community 113"
Cohesion: 0.32
Nodes (8): Menu 010 Detail Card (SVG Image), Cá lóc kho tộ (Braised Snakehead Fish in Clay Pot), Canh cải xanh nấu thịt bằm (Mustard Green Soup with Minced Pork), Đậu đũa xào tỏi (Long Beans Stir-fried with Garlic), Sample Whole-Package Price 389,000 đ, GoCook Menu 010 (Dish Package), Serving Capacity 3–5 Guests, Trứng chiên hành (Omelette with Scallions)

### Community 114 - "Community 114"
Cohesion: 0.36
Nodes (8): Green and Tan Menu Palette, Cơm văn phòng (Office Lunch) Category, Combo cơm gà xối mỡ, Garnish and Side Icons (Herb Rosette, Bowl, Teacup), GOCOOK Brand, Menu 014 Cover Illustration, Chicken Rice Plate Illustration, 129.000 đ · 1–2 người (Price and Serving Size)

### Community 115 - "Community 115"
Cohesion: 0.32
Nodes (7): Cơm văn phòng (office lunch set), Combo cơm bò lúc lắc, GOCOOK brand badge, #285846 / #EDAF69 / #95B8A0 brand palette, Menu 015 cover art, Top-down plate illustration, 149.000 đ for 1-2 people

### Community 116 - "Community 116"
Cohesion: 0.39
Nodes (8): GoCook Menu 017 Detail Card, Canh rau ngót nấu thịt bằm, Cơm thịt kho trứng, GoCook Menu 017 Branding, Package Price 119,000 đ, Serving Size 1–2 Guests, Rau muống xào tỏi, Vietnamese Home-Style Meal Set

### Community 119 - "Community 119"
Cohesion: 0.25
Nodes (8): on-profile, activate, import, spring, config, threads, virtual, enabled

### Community 120 - "Community 120"
Cohesion: 0.48
Nodes (5): GoCook Hero Image - Chef Stir-Frying a Wok in a Home Kitchen, White Apron with GoCook Logo Mark, Live Wok Stir-Fry with Visible Steam, Raw Ingredient Mise-en-Place on Wooden Table, Tropical Daylight and Residential View Through Window

### Community 121 - "Community 121"
Cohesion: 0.48
Nodes (6): Avocado Quinoa Salad, Grilled Salmon Plate with Asparagus (unlabeled), GO Cook Đầu Bếp Tại Gia Homepage Hero Banner, Menu South Hero Image (GO Cook Home Kitchen), Lotus Seed Pumpkin Soup, Trang Chủ (Homepage) Route

### Community 122 - "Community 122"
Cohesion: 0.48
Nodes (6): Menu category: CƠM GIA ĐÌNH (family meals), Flat vector food motifs (rice plate, sauce bowl, star-anise garnish, scattered dots), GOCOOK brand pill badge, Menu 004 Cover SVG (Bữa cơm thịt kho trứng), Dish: Bữa cơm thịt kho trứng (braised pork belly with eggs), Warm cream/terracotta/leaf palette (#FFF9ED-#FBEEDC, #DF865A, #6A3F23, #93B57A)

### Community 123 - "Community 123"
Cohesion: 0.48
Nodes (7): Mâm cơm canh cua đồng (Field-Crab Soup Family Meal), CƠM GIA ĐÌNH (Family Meals) Menu Category, GOCOOK Brand Pill Badge, THỰC ĐƠN MINH HỌA - Illustrative Sample Menu Disclaimer, Menu 007 Cover Illustration (GOCOOK Family Meal Card), Warm Cream / Terracotta / Sage Palette (#FFF9ED, #6A3F23, #DF865A, #93B57A, #F0D9A5), Price 329.000 đ for 3-4 people

### Community 124 - "Community 124"
Cohesion: 0.43
Nodes (7): Cải thìa xào nấm (stir-fried bok choy with mushrooms), Canh rau dền nấu tôm (water spinach soup with shrimp), Đậu hũ sốt cà chua (tofu in tomato sauce), Tôm rim thịt ba chỉ (caramelized shrimp with pork belly), 3–4 khách (serving size, 3-4 guests), GoCook Menu 008 Detail Card (1200x800 SVG), GIÁ MẪU CẢ GÓI — 359,000 đ (sample package price badge)

### Community 125 - "Community 125"
Cohesion: 0.57
Nodes (5): Menu 011 Cover (SVG, 1200x800), Bữa Cơm Gà Rô Ti (Roast Chicken Rice Meal) Menu Title, Cơm Gia Đình (Family Meals) Menu Category, Top-Down Plate Illustration (rice, greens, protein, dipping bowl, star anise), Price And Portion Line (469.000 đ · 4-6 người)

### Community 126 - "Community 126"
Cohesion: 0.33
Nodes (7): Cải ngọt xào tỏi, Canh gà nấu nấm, Gà rô ti, Giá mẫu cả gói - 469,000 đ, Menu 011 - Các món trong menu, 4-6 khách (ảnh minh họa frontend), Trứng hấp thịt

### Community 127 - "Community 127"
Cohesion: 0.48
Nodes (7): GoCook Menu 013 Detail Image, Cải ngọt xào tỏi (Garlic Stir-fried Bok Choy), Canh cà chua trứng (Tomato Egg Soup), Cơm sườn nướng (Grilled Pork Chop Rice), GoCook Menu Card Design Pattern, Sample Package Price 119,000 đ, Serving Size 1-2 Guests

### Community 128 - "Community 128"
Cohesion: 0.48
Nodes (7): GOCOOK Menu 016 Detail Illustration, Các món trong menu (Dishes in Menu heading), Cải thìa xào nấm, Canh rong biển nấu thịt bằm, Cơm gà rô ti, Giá mẫu cả gói 139,000 đ, 1–2 khách portion

### Community 129 - "Community 129"
Cohesion: 0.52
Nodes (6): Menu 018 Cover — Combo cơm cá kho, Cơm Văn Phòng (office lunch category), Combo cơm cá kho (braised fish rice combo), GoCook Brand Lockup, 129.000 đ · 1–2 người Pricing and Serving Label, Rice Bowl with Braised Fish Illustration

### Community 133 - "Community 133"
Cohesion: 0.29
Nodes (6): cloudinary, api-key, api-secret, cloudinary-name, server, port

### Community 134 - "Community 134"
Cohesion: 0.33
Nodes (6): Bò Mắc Cần Tỏi, Bò Xào Cần Tỏi, Canh Xươn Sấu, Gỏi Dú Đú Xanh, Chef Menus Two Marketing Image, Nem Rán

### Community 135 - "Community 135"
Cohesion: 0.47
Nodes (5): Brand Green Fill #376412, GoCook Favicon (favicon.svg), "G" Lettermark Glyph, GoCook Product Identity, Rounded Square Tile Container (rx=18)

### Community 136 - "Community 136"
Cohesion: 0.60
Nodes (4): European Menu Asset Image, Candlelit Fine-Dining Ambience with Blurred Diners, European Cuisine Menu Category, Mediterranean Dish Assortment (Sliced Steak, Prawn Pasta, Scallop Puree, Burrata Caprese)

### Community 137 - "Community 137"
Cohesion: 0.47
Nodes (4): Accompaniment set: fresh herb plate, sliced pork roll, rice crackers, chilli and nuoc cham dipping sauces, Hue regional cuisine presentation, menu-hue.webp (Vietnamese table spread hero image), Menu category card artwork in GoCook frontend

### Community 138 - "Community 138"
Cohesion: 0.53
Nodes (6): Canh bí xanh nấu tôm, Cơm gà xối mỡ, Menu 014 Detail Card, Giá mẫu cả gói 129,000 đ, Rau muống xào tỏi, 1-2 khách

### Community 139 - "Community 139"
Cohesion: 0.47
Nodes (6): Canh cà chua trứng, Cơm chiên dương châu, GoCook Menu 020 Detail Illustration, Sample Package Price 129,000 đ, Rau củ luộc chấm kho quẹt, Serving Size 1–2 khách

### Community 141 - "Community 141"
Cohesion: 0.33
Nodes (6): org.hibernate.orm.jdbc.bind, org.hibernate.SQL, org.springframework.security, logging, level, logging

### Community 142 - "Community 142"
Cohesion: 0.33
Nodes (6): properties, smtp, mail, auth, starttls, enable

### Community 143 - "Community 143"
Cohesion: 0.40
Nodes (5): scripts, build, dev, preview, typecheck

### Community 144 - "Community 144"
Cohesion: 0.70
Nodes (5): Chef Menus Three Hero Image, Traditional Earthenware Presentation, Fresh Herbs and Garnish Display, Kho Braised Dishes, Vietnamese Home-Style Cooking

### Community 145 - "Community 145"
Cohesion: 0.50
Nodes (3): Brand Color Palette (green #4a7a2a / white / amber #c98a3a), Chef Hat Motif (toque mark), GO Cook Logo Icon (SVG)

### Community 146 - "Community 146"
Cohesion: 0.60
Nodes (3): menu-hotpot.webp (Hotpot Menu Image), Clay-Pot Braised Hotpot Dish (Centerpiece), Vietnamese Family Meal Spread (Rice, Stir-Fry, Sliced Pork Roll, Herbs)

### Community 147 - "Community 147"
Cohesion: 0.60
Nodes (4): Go Cook (brand shown in page title), Vegetarian Menu Card Image (menu-vegetarian.webp), Danh Mục Thực Đơn Chay (Vegetarian Menu Category), Vietnamese Vegetarian Dish Spread (banana-leaf wrapped bánh, clay pot, fresh spring rolls, tea set)

### Community 148 - "Community 148"
Cohesion: 0.60
Nodes (5): GoCook Menu 015 Detail Card, Canh bí đỏ nấu xương, Cơm bò lúc lắc, Sample Package Price 149,000 đ, Su su xào tỏi

### Community 151 - "Community 151"
Cohesion: 0.40
Nodes (5): driver-class-name, password, url, username, datasource

### Community 152 - "Community 152"
Cohesion: 0.40
Nodes (5): format_sql, properties, show-sql, hibernate, jpa

### Community 153 - "Community 153"
Cohesion: 0.40
Nodes (5): rabbitmq, cache-data-queue, exchange-name, user-mail-queue, user-mail-routing-key

### Community 154 - "Community 154"
Cohesion: 0.40
Nodes (5): host, password, port, username, rabbitmq

### Community 155 - "Community 155"
Cohesion: 0.40
Nodes (5): redis, host, password, port, data

### Community 156 - "Community 156"
Cohesion: 0.40
Nodes (5): driver-class-name, password, url, username, datasource

### Community 157 - "Community 157"
Cohesion: 0.40
Nodes (5): format_sql, properties, show-sql, hibernate, jpa

### Community 158 - "Community 158"
Cohesion: 0.40
Nodes (5): jwt, accessTokenExpirationTime, refreshTokenExpirationTime, resetPasswordTokenExpirationTime, secretKey

### Community 159 - "Community 159"
Cohesion: 0.40
Nodes (5): host, password, port, username, mail

### Community 160 - "Community 160"
Cohesion: 0.40
Nodes (5): rabbitmq, cache-data-queue, exchange-name, user-mail-queue, user-mail-routing-key

### Community 161 - "Community 161"
Cohesion: 0.40
Nodes (5): host, password, port, username, rabbitmq

### Community 162 - "Community 162"
Cohesion: 0.67
Nodes (4): Chef Menus One Hero Image, Home Chef Service Context, Vietnamese Hot Pot Dining Experience, Fresh Seafood Ingredients Display

### Community 163 - "Community 163"
Cohesion: 0.67
Nodes (3): GOCOOK Wordmark (Brand Lockup), Menu Image Fallback Placeholder (SVG 1200x800), "Ảnh menu đang cập nhật" (Menu Image Updating) Caption

### Community 164 - "Community 164"
Cohesion: 0.67
Nodes (3): ImageResizeOptions, imageToBase64(), loadImage()

### Community 168 - "Community 168"
Cohesion: 0.50
Nodes (4): on-profile, activate, import, config

### Community 169 - "Community 169"
Cohesion: 0.50
Nodes (4): redis, type, time-to-live, cache

### Community 170 - "Community 170"
Cohesion: 0.50
Nodes (4): cloudinary, api-key, api-secret, cloudinary-name

## Ambiguous Edges - Review These
- `"G" Lettermark Glyph` → `GoCook Product Identity`  [AMBIGUOUS]
  frontend/public/assets/favicon.svg · relation: semantically_similar_to
- `Clay Pot Caramelised Fish (Cá Kho Tộ)` → `Herbed Noodle Bowl with Fish and Tomato`  [AMBIGUOUS]
  frontend/public/assets/meal.png · relation: semantically_similar_to
- `Avocado Quinoa Salad` → `Lotus Seed Pumpkin Soup`  [AMBIGUOUS]
  frontend/public/assets/menu-south.webp · relation: conceptually_related_to
- `Com Gia Dinh Home-Style Meal Platter` → `Thick Brown Fermented Dipping Paste with Spoon`  [AMBIGUOUS]
  frontend/public/images/menus/menu-001-cover.png · relation: references
- `Mâm cơm miền Nam (menu title)` → `Small dipping-bowl illustration (bottom-right, brown sauce with highlights)`  [AMBIGUOUS]
  frontend/public/images/menus/menu-002-cover.svg · relation: conceptually_related_to
- `Central rice plate illustration (broken-rice bed with grains, greens, tomato pieces)` → `Eight-petal star garnish illustration (top-left of plate cluster)`  [AMBIGUOUS]
  frontend/public/images/menus/menu-002-cover.svg · relation: conceptually_related_to
- `Cá basa kho tiêu (pepper-braised basa fish)` → `GIÁ MẪU CẢ GÓI 279,000 đ (sample whole-package price badge)`  [AMBIGUOUS]
  frontend/public/images/menus/menu-003-detail.svg · relation: conceptually_related_to

## Knowledge Gaps
- **143 isolated node(s):** `com.james:go-cook-service`, `ACTIVE`, `CLOSED`, `TEXT`, `IMAGE` (+138 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 824 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **38 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `BaseResponse` connect `Community 13` to `Java Annotations & Enums`, `Email & Data Models`, `Admin Menu Controller`, `Transaction & Service Layer`, `Admin Dish Controller`, `Community 15`, `Community 18`, `Community 19`, `Community 22`, `Community 27`, `Community 29`, `Community 35`, `Community 38`, `Community 166`, `Community 40`, `Community 41`, `Community 167`, `Community 44`, `Community 45`, `Community 48`, `Community 49`, `Community 53`, `Community 59`, `Community 66`, `Community 68`, `Community 86`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **What connects `com.james:go-cook-service`, `ACTIVE`, `CLOSED` to the rest of the system?**
  _143 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Frontend Auth & Routing` be split into smaller, more focused modules?**
  _Cohesion score 0.08885850991114148 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Frontend Auth & Routing` to `Menu Catalog & Search`, `Axios HTTP Client`, `Community 10`, `Community 11`, `Community 16`, `Community 17`, `Community 20`, `Community 21`, `Community 24`, `Community 30`, `Community 32`, `Community 43`, `Community 55`, `Community 58`, `Community 61`, `Community 64`, `Community 65`, `Community 71`, `Community 78`, `Community 85`, `Community 106`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Should `Menu Catalog & Search` be split into smaller, more focused modules?**
  _Cohesion score 0.05189189189189189 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `"G" Lettermark Glyph` and `GoCook Product Identity`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Clay Pot Caramelised Fish (Cá Kho Tộ)` and `Herbed Noodle Bowl with Fish and Tomato`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._