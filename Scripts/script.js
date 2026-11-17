/**
 * ============================================================================
 * TCG ARENA - JAVASCRIPT THUẦN (VANILLA JS)
 * Website Thương Mại Điện Tử Bán Thẻ Bài Pokémon & Yu-Gi-Oh!
 * Dành cho sinh viên học môn Thiết kế Web - Dễ hiểu, mạch lạc, dễ mở rộng.
 * ============================================================================
 */

// Chế độ nghiêm ngặt để đảm bảo code sạch
'use strict';

/* ==========================================================================
   1. CƠ SỞ DỮ LIỆU SẢN PHẨM MẪU (34 SẢN PHẨM CHÍNH HÃNG)
   ========================================================================== */
const PRODUCTS_DATA = [
  // --- POKÉMON TCG (14 sản phẩm) ---
  {
    id: 'pkmn-01',
    name: 'Pokémon TCG: Scarlet & Violet - 151 Booster Box (Nhật Bản)',
    game: 'pokemon',
    category: 'booster-box',
    price: 3850000,
    originalPrice: 4200000,
    image: 'Images/pokemon/pkmn-151-booster-box.jpg',
    fallbackImage: 'Images/pokemon/pkmn-151-booster-box.svg',
    stock: 5,
    status: 'Còn hàng',
    badge: 'HOT / BESTSELLER',
    badgeClass: 'badge-hot',
    rating: 5,
    isFeatured: true,
    expansion: 'Scarlet & Violet: 151 (SV2a)',
    rarity: 'Factory Sealed Box',
    condition: 'Nguyên seal nilon nhà máy Pokémon Company Nhật Bản',
    description: 'Hộp thẻ bài Pokémon 151 phiên bản Nhật Bản cực kỳ được săn đón! Gồm 20 gói booster pack, mỗi gói 7 thẻ bài chứa toàn bộ 151 Pokémon thế hệ đầu tiên xứ Kanto như Charizard, Mew, Blastoise, Venusaur...'
  },
  {
    id: 'pkmn-02',
    name: 'Pokémon TCG: Crown Zenith Elite Trainer Box (ETB)',
    game: 'pokemon',
    category: 'etb',
    price: 1650000,
    originalPrice: 1850000,
    image: 'Images/pokemon/pkmn-crown-zenith-etb.jpg',
    fallbackImage: 'Images/pokemon/pkmn-crown-zenith-etb.svg',
    stock: 8,
    status: 'Còn hàng',
    badge: 'POPULAR ETB',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: true,
    expansion: 'Crown Zenith Special Expansion',
    rarity: 'Elite Trainer Box',
    condition: 'Factory Sealed (English)',
    description: 'Bộ sưu tập Crown Zenith ETB đẳng cấp gồm 10 gói booster pack, thẻ Promo Lucario VSTAR lá bài nhũ vàng lấp lánh, 65 bọc bài bọc Lucario độc quyền, xúc xắc thi đấu và phụ kiện chơi bài chuyên nghiệp.'
  },
  {
    id: 'pkmn-03',
    name: 'Pokémon TCG: Surging Sparks Booster Box (Tiếng Anh)',
    game: 'pokemon',
    category: 'booster-box',
    price: 3450000,
    originalPrice: 3700000,
    image: 'Images/pokemon/pkmn-surging-sparks-box.jpg',
    fallbackImage: 'Images/pokemon/pkmn-surging-sparks-box.svg',
    stock: 12,
    status: 'Còn hàng',
    badge: 'NEW ARRIVAL',
    badgeClass: 'badge-new',
    rating: 5,
    isFeatured: true,
    expansion: 'Surging Sparks (SSP)',
    rarity: 'Booster Box (36 Gói)',
    condition: 'Factory Sealed 100% Chính Hãng',
    description: 'Phiên bản mở rộng mới nhất với chủ đạo Terastal Pikachu ex sấm sét vô cực, Latias, Archaludon ex và hàng loạt lá bài Special Illustration Rare (SIR) giá trị cao ngất ngưởng trên thị trường sưu tầm.'
  },
  {
    id: 'pkmn-04',
    name: 'Charizard ex #199/165 Special Illustration Rare (SIR 151)',
    game: 'pokemon',
    category: 'single',
    price: 3200000,
    originalPrice: 3500000,
    image: 'Images/pokemon/pkmn-charizard-ex-sir.png',
    fallbackImage: 'Images/pokemon/pkmn-charizard-ex-sir.svg',
    stock: 1,
    status: 'Chỉ còn 1 thẻ',
    badge: 'ULTRA RARE',
    badgeClass: 'badge-rare',
    rating: 5,
    isFeatured: true,
    expansion: 'Scarlet & Violet: 151',
    rarity: 'Special Illustration Rare (SIR)',
    condition: 'Near Mint (Đã bọc Perfect Fit + Toploader UV)',
    description: 'Lá bài chén thánh Grail của bộ sưu tập 151. Tranh vẽ nghệ thuật tuyệt mỹ miêu tả Charizard bay lượn trên hẻm núi núi lửa. Tình trạng góc cạnh 10/10 hoàn hảo sẵn sàng gửi chấm điểm PSA/BGS.'
  },
  {
    id: 'pkmn-05',
    name: 'Pikachu ex #238/191 Special Illustration Rare (Surging Sparks)',
    game: 'pokemon',
    category: 'single',
    price: 4800000,
    originalPrice: 5200000,
    image: 'Images/pokemon/pkmn-pikachu-ex-sir.png',
    fallbackImage: 'Images/pokemon/pkmn-pikachu-ex-sir.svg',
    stock: 1,
    status: 'Chỉ còn 1 thẻ',
    badge: 'GRAIL CARD',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: true,
    expansion: 'Surging Sparks (SSP)',
    rarity: 'Special Illustration Rare (SIR)',
    condition: 'Gem Mint condition',
    description: 'Thẻ bài tâm điểm đắt giá nhất bộ Surging Sparks! Chiếc vương miện ngọc bích Terastal tỏa sáng lộng lẫy cùng sát thương 300 Topaz Bolt cực mạnh.'
  },
  {
    id: 'pkmn-06',
    name: 'Umbreon VMAX #215/203 Alternate Art Secret (Evolving Skies)',
    game: 'pokemon',
    category: 'single',
    price: 18500000,
    originalPrice: 19500000,
    image: 'Images/pokemon/pkmn-umbreon-vmax-alt.png',
    fallbackImage: 'Images/pokemon/pkmn-umbreon-vmax-alt.svg',
    stock: 1,
    status: 'Chỉ còn 1 thẻ',
    badge: 'MOONBREON',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: true,
    expansion: 'Sword & Shield: Evolving Skies',
    rarity: 'Alternate Art Secret Rare',
    condition: 'Near Mint / Pack Fresh',
    description: 'Huyền thoại Moonbreon - lá bài biểu tượng nổi tiếng và có giá trị cao nhất kỷ nguyên Sword & Shield. Tác phẩm nghệ thuật Umbreon vươn tay chạm ánh trăng tròn đầy ma mị.'
  },
  {
    id: 'pkmn-07',
    name: 'Pokémon TCG: Prismatic Evolutions Booster Bundle',
    game: 'pokemon',
    category: 'booster-box',
    price: 950000,
    originalPrice: 1100000,
    image: 'Images/pokemon/pkmn-prismatic-bundle.jpg',
    fallbackImage: 'Images/pokemon/pkmn-prismatic-bundle.svg',
    stock: 20,
    status: 'Còn hàng',
    badge: 'PRE-ORDER',
    badgeClass: 'badge-new',
    rating: 5,
    isFeatured: false,
    expansion: 'Prismatic Evolutions',
    rarity: 'Booster Bundle (6 Gói)',
    condition: 'Factory Sealed',
    description: 'Gói Bundle gồm 6 gói bài mở rộng Prismatic Evolutions tập hợp toàn bộ các dạng tiến hóa của Eevee dạng Terastal rực rỡ sắc màu cùng các thẻ bài Rainbow Foil.'
  },
  {
    id: 'pkmn-08',
    name: 'Pokémon TCG: Scarlet & Violet - 151 Booster Pack (Lẻ)',
    game: 'pokemon',
    category: 'booster-pack',
    price: 120000,
    originalPrice: 135000,
    image: 'Images/pokemon/pkmn-151-pack.jpg',
    fallbackImage: 'Images/pokemon/pkmn-151-pack.svg',
    stock: 65,
    status: 'Còn hàng',
    badge: 'HOT PACK',
    badgeClass: 'badge-hot',
    rating: 5,
    isFeatured: false,
    expansion: 'Scarlet & Violet: 151',
    rarity: 'Booster Pack (10 Lá)',
    condition: 'Mới 100% chưa qua kiểm tra cân nặng',
    description: 'Gói booster pack lẻ nguyên vẹn chính hãng. Cơ hội bốc trúng Charizard SIR, Mew SAR, Blastoise SAR và các thẻ bài Master Ball Reverse Holo quý giá.'
  },
  {
    id: 'pkmn-09',
    name: 'Pokémon TCG: Surging Sparks Booster Pack (Lẻ)',
    game: 'pokemon',
    category: 'booster-pack',
    price: 110000,
    originalPrice: 125000,
    image: 'Images/pokemon/pkmn-surging-sparks-pack.jpg',
    fallbackImage: 'Images/pokemon/pkmn-surging-sparks-pack.svg',
    stock: 90,
    status: 'Còn hàng',
    badge: 'NEW PACK',
    badgeClass: 'badge-new',
    rating: 5,
    isFeatured: false,
    expansion: 'Surging Sparks',
    rarity: 'Booster Pack (10 Lá)',
    condition: 'Chính hãng nguyên seal',
    description: 'Gói bài mở rộng Surging Sparks tiếng Anh nguyên bản, mỗi gói chứa 10 lá bài Pokémon cùng 1 mã code chơi game trực tuyến Pokémon TCG Live.'
  },
  {
    id: 'pkmn-10',
    name: 'Pokémon TCG: Twilight Masquerade Booster Pack (Lẻ)',
    game: 'pokemon',
    category: 'booster-pack',
    price: 95000,
    originalPrice: 110000,
    image: 'Images/pokemon/pkmn-twilight-pack.jpg',
    fallbackImage: 'Images/pokemon/pkmn-twilight-pack.svg',
    stock: 40,
    status: 'Còn hàng',
    badge: 'BEST VALUE',
    badgeClass: 'badge-meta',
    rating: 4.8,
    isFeatured: false,
    expansion: 'Twilight Masquerade',
    rarity: 'Booster Pack',
    condition: 'Chính hãng nguyên seal',
    description: 'Khám phá miền đất Kitakami cùng Ogerpon đeo các mặt nạ nguyên tố huyền ảo và các thẻ ACE SPEC hùng mạnh bậc nhất thi đấu giải.'
  },
  {
    id: 'pkmn-11',
    name: 'Pokémon TCG: Paldean Fates Elite Trainer Box (ETB)',
    game: 'pokemon',
    category: 'etb',
    price: 1550000,
    originalPrice: 1700000,
    image: 'Images/pokemon/pkmn-paldean-fates-etb.jpg',
    fallbackImage: 'Images/pokemon/pkmn-paldean-fates-etb.svg',
    stock: 7,
    status: 'Còn hàng',
    badge: 'SHINY ETB',
    badgeClass: 'badge-rare',
    rating: 5,
    isFeatured: false,
    expansion: 'Paldean Fates',
    rarity: 'Elite Trainer Box',
    condition: 'Factory Sealed',
    description: 'Chuyên đề Pokémon Shiny (Sắc Màu Đặc Biệt) lấp lánh! Bao gồm 9 gói Paldean Fates, thẻ Promo Shiny Mimikyu cực dễ thương và phụ kiện thi đấu.'
  },
  {
    id: 'pkmn-12',
    name: 'Mew ex #205/165 Hyper Rare Gold (151)',
    game: 'pokemon',
    category: 'single',
    price: 980000,
    originalPrice: 1150000,
    image: 'Images/pokemon/pkmn-mew-gold.png',
    fallbackImage: 'Images/pokemon/pkmn-mew-gold.svg',
    stock: 2,
    status: 'Còn hàng',
    badge: 'GOLD RARE',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: false,
    expansion: 'Scarlet & Violet: 151',
    rarity: 'Hyper Rare (Gold Metal Finish)',
    condition: 'Near Mint 100%',
    description: 'Thẻ bài Mew ex mạ vàng hoàng gia sang trọng bậc nhất. Hiệu ứng Restart rút bài và Genome Hacking sao chép chiêu thức đối thủ làm nên thương hiệu của chú mèo huyền ảo.'
  },
  {
    id: 'pkmn-13',
    name: 'Iono #269/193 Special Illustration Rare (Paldea Evolved)',
    game: 'pokemon',
    category: 'single',
    price: 2100000,
    originalPrice: 2350000,
    image: 'Images/pokemon/pkmn-iono-sir.png',
    fallbackImage: 'Images/pokemon/pkmn-iono-sir.svg',
    stock: 2,
    status: 'Còn hàng',
    badge: 'WAIFU SIR',
    badgeClass: 'badge-rare',
    rating: 5,
    isFeatured: false,
    expansion: 'Paldea Evolved',
    rarity: 'Special Illustration Rare Supporter',
    condition: 'Near Mint',
    description: 'Lá bài nữ huấn luyện viên Gym Leader Iono nổi tiếng xứ Paldea. Tranh vẽ rực rỡ theo phong cách livestream vui nhộn cùng hiệu ứng đảo ngược thế cờ trong thi đấu.'
  },
  {
    id: 'pkmn-14',
    name: 'Pokémon TCG: Charizard ex Super-Premium Collection Box',
    game: 'pokemon',
    category: 'collection',
    price: 2750000,
    originalPrice: 3000000,
    image: 'Images/pokemon/pkmn-charizard-collection-box.jpg',
    fallbackImage: 'Images/pokemon/pkmn-charizard-collection-box.svg',
    stock: 4,
    status: 'Còn hàng',
    badge: 'SPECIAL BOX',
    badgeClass: 'badge-hot',
    rating: 5,
    isFeatured: false,
    expansion: 'Special Premium Collection',
    rarity: 'Super-Premium Box',
    condition: 'Factory Sealed Hộp Lớn',
    description: 'Hộp quà tặng khổng lồ phiên bản giới hạn gồm 1 mô hình tượng Charizard trưng bày hiệu ứng lửa trong suốt, 10 gói booster pack cùng 3 lá bài foil Charizard ex độc quyền.'
  },

  // --- YU-GI-OH! TCG (14 sản phẩm) ---
  {
    id: 'ygo-01',
    name: 'Yu-Gi-Oh! 25th Anniversary Rarity Collection II Booster Box',
    game: 'yugioh',
    category: 'booster-box',
    price: 2250000,
    originalPrice: 2500000,
    image: 'Images/yugioh/ygo-rarity-collection-2-box.jpg',
    fallbackImage: 'Images/yugioh/ygo-rarity-collection-2-box.svg',
    stock: 6,
    status: 'Còn hàng',
    badge: 'HOT / 25TH ANNIV',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: true,
    expansion: '25th Rarity Collection II (RA02)',
    rarity: 'All-Foil Booster Box (24 Gói)',
    condition: 'Factory Sealed Konami Official',
    description: 'Hộp thẻ bài toàn bộ là Foil kỷ niệm 25 năm Yu-Gi-Oh! Cơ hội sở hữu 7 độ hiếm khác nhau trên cùng 1 lá bài: Quarter Century Secret Rare, Prismatic Collector Rare, Ultimate Rare...'
  },
  {
    id: 'ygo-02',
    name: 'Yu-Gi-Oh! Phantom Nightmare Booster Box (Konami TCG)',
    game: 'yugioh',
    category: 'booster-box',
    price: 1950000,
    originalPrice: 2150000,
    image: 'Images/yugioh/ygo-phantom-nightmare-box.jpg',
    fallbackImage: 'Images/yugioh/ygo-phantom-nightmare-box.svg',
    stock: 9,
    status: 'Còn hàng',
    badge: 'META SET',
    badgeClass: 'badge-meta',
    rating: 5,
    isFeatured: true,
    expansion: 'Phantom Nightmare (PHNI)',
    rarity: 'Booster Box (24 Gói)',
    condition: 'Nguyên seal Konami',
    description: 'Bộ mở rộng cốt lõi giới thiệu hệ thống bài Yubel mới cực mạnh, Voiceless Voice và thẻ bài Handtrap quốc dân Promethean Princess thống trị các giải đấu YCS toàn cầu.'
  },
  {
    id: 'ygo-03',
    name: 'Yu-Gi-Oh! Structure Deck: Fire Kings (Tiếng Anh)',
    game: 'yugioh',
    category: 'structure-deck',
    price: 320000,
    originalPrice: 350000,
    image: 'Images/yugioh/ygo-structure-fire-kings.jpg',
    fallbackImage: 'Images/yugioh/ygo-structure-fire-kings.svg',
    stock: 25,
    status: 'Còn hàng',
    badge: 'TIER 1 READY',
    badgeClass: 'badge-hot',
    rating: 5,
    isFeatured: true,
    expansion: 'Structure Deck: Fire Kings (SR14)',
    rarity: 'Pre-constructed Deck (48 Lá)',
    condition: 'Nguyên seal kèm bàn đấu giấy',
    description: 'Bộ bài cấu trúc sẵn hoàn chỉnh của bộ tộc Vua Lửa Hỏa Hoàng Tinh. Mua ngay 3 hộp là bạn đã sở hữu bộ bài chuẩn Tier 1 thi đấu giải với quái thú Phượng Hoàng Lửa bất tử.'
  },
  {
    id: 'ygo-04',
    name: 'Yu-Gi-Oh! Structure Deck: Crimson King (Jack Atlas)',
    game: 'yugioh',
    category: 'structure-deck',
    price: 310000,
    originalPrice: 340000,
    image: 'Images/yugioh/ygo-structure-crimson-king.jpg',
    fallbackImage: 'Images/yugioh/ygo-structure-crimson-king.svg',
    stock: 18,
    status: 'Còn hàng',
    badge: 'FAN FAVORITE',
    badgeClass: 'badge-rare',
    rating: 5,
    isFeatured: false,
    expansion: 'Structure Deck: Crimson King',
    rarity: 'Pre-constructed Deck (50 Lá)',
    condition: 'Nguyên seal Konami',
    description: 'Bộ bài của Vua Đua Xe Jack Atlas tái hiện sức mạnh hung bạo của Rồng Đỏ Tinh Tú Red Dragon Archfiend cùng các quái thú Synchro uy lực xé tan sàn đấu.'
  },
  {
    id: 'ygo-05',
    name: 'Blue-Eyes White Dragon - 25th Quarter Century Secret Rare',
    game: 'yugioh',
    category: 'single',
    price: 4500000,
    originalPrice: 4900000,
    image: 'Images/yugioh/ygo-blue-eyes-qcr.jpg',
    fallbackImage: 'Images/yugioh/ygo-blue-eyes-qcr.svg',
    stock: 1,
    status: 'Chỉ còn 1 thẻ',
    badge: 'LEGENDARY / QCR',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: true,
    expansion: '25th Anniversary Rarity Collection',
    rarity: 'Quarter Century Secret Rare (QCR)',
    condition: 'Near Mint 10/10',
    description: 'Lá bài huyền thoại tối thượng Rồng Trắng Mắt Xanh của Seto Kaiba với con dấu 25th Anniversary mạ vàng rực rỡ cùng hiệu ứng lăng kính chớp nháy toàn mặt thẻ.'
  },
  {
    id: 'ygo-06',
    name: 'Dark Magician - 25th Quarter Century Secret Rare',
    game: 'yugioh',
    category: 'single',
    price: 3800000,
    originalPrice: 4200000,
    image: 'Images/yugioh/ygo-dark-magician-qcr.jpg',
    fallbackImage: 'Images/yugioh/ygo-dark-magician-qcr.svg',
    stock: 1,
    status: 'Chỉ còn 1 thẻ',
    badge: 'ICONIC / QCR',
    badgeClass: 'badge-rare',
    rating: 5,
    isFeatured: false,
    expansion: '25th Anniversary Rarity Collection',
    rarity: 'Quarter Century Secret Rare (QCR)',
    condition: 'Near Mint 10/10',
    description: 'Phù Thủy Áo Đen - linh hồn của Vua Trò Chơi Yugi Muto. Được in ấn với kỹ thuật dập chữ chìm và ánh bạc Quarter Century độc nhất vô nhị chỉ sản xuất trong năm 2024.'
  },
  {
    id: 'ygo-07',
    name: 'Slifer the Sky Dragon - Prismatic Secret Rare (TN19)',
    game: 'yugioh',
    category: 'single',
    price: 1450000,
    originalPrice: 1600000,
    image: 'Images/yugioh/ygo-slifer-god.jpg',
    fallbackImage: 'Images/yugioh/ygo-slifer-god.svg',
    stock: 2,
    status: 'Còn hàng',
    badge: 'EGYPTIAN GOD',
    badgeClass: 'badge-hot',
    rating: 5,
    isFeatured: false,
    expansion: '2019 Gold Sarcophagus Tin',
    rarity: 'Prismatic Secret Rare',
    condition: 'Near Mint',
    description: 'Một trong Tam Đại Vị Thần Ai Cập hùng mạnh nhất - Rồng Bay Bầu Trời Osiris (Slifer). Tranh vẽ do chính cố tác giả Kazuki Takahashi vẽ tay với chữ ký mạ vàng độc quyền.'
  },
  {
    id: 'ygo-08',
    name: 'Ash Blossom & Joyous Spring - Quarter Century Secret Rare',
    game: 'yugioh',
    category: 'single',
    price: 1850000,
    originalPrice: 2100000,
    image: 'Images/yugioh/ygo-ash-blossom-qcr.jpg',
    fallbackImage: 'Images/yugioh/ygo-ash-blossom-qcr.svg',
    stock: 3,
    status: 'Còn hàng',
    badge: 'STAPLE HANDTRAP',
    badgeClass: 'badge-meta',
    rating: 5,
    isFeatured: true,
    expansion: 'Rarity Collection I',
    rarity: 'Quarter Century Secret Rare',
    condition: 'Near Mint',
    description: 'Lá bài Handtrap quyền lực nhất lịch sử Yu-Gi-Oh! Có khả năng ngắt quãng hầu hết mọi combo của đối thủ ngay trong lượt đầu tiên. Bản QCR là ước mơ của mọi bài thủ thi đấu chuyên nghiệp.'
  },
  {
    id: 'ygo-09',
    name: 'Yu-Gi-Oh! Age of Overlord Booster Pack (Lẻ)',
    game: 'yugioh',
    category: 'booster-pack',
    price: 90000,
    originalPrice: 105000,
    image: 'Images/yugioh/ygo-age-of-overlord-pack.jpg',
    fallbackImage: 'Images/yugioh/ygo-age-of-overlord-pack.svg',
    stock: 75,
    status: 'Còn hàng',
    badge: 'POPULAR PACK',
    badgeClass: 'badge-meta',
    rating: 4.9,
    isFeatured: false,
    expansion: 'Age of Overlord (AGOV)',
    rarity: 'Booster Pack (9 Lá)',
    condition: 'Chính hãng nguyên seal Konami',
    description: 'Gói booster pack lẻ của set bài huyền thoại AGOV, nơi chứa S:P Little Knight, Diabellstar the Black Witch và Wanted: Seeker of Sinful Spoils.'
  },
  {
    id: 'ygo-10',
    name: 'Yu-Gi-Oh! Legacy of Destruction Booster Pack (Lẻ)',
    game: 'yugioh',
    category: 'booster-pack',
    price: 95000,
    originalPrice: 110000,
    image: 'Images/yugioh/ygo-legacy-destruction-pack.jpg',
    fallbackImage: 'Images/yugioh/ygo-legacy-destruction-pack.svg',
    stock: 85,
    status: 'Còn hàng',
    badge: 'NEW PACK',
    badgeClass: 'badge-new',
    rating: 4.8,
    isFeatured: false,
    expansion: 'Legacy of Destruction (LEDE)',
    rarity: 'Booster Pack (9 Lá)',
    condition: 'Chính hãng nguyên seal Konami',
    description: 'Sự trở lại của Rồng Hủy Diệt Gandora-G, Shining Sanguine và các archetypes Yugi Shining Sarcophagus mới toanh.'
  },
  {
    id: 'ygo-11',
    name: 'Yu-Gi-Oh! 25th Anniversary Tin: Dueling Mirrors',
    game: 'yugioh',
    category: 'collection',
    price: 650000,
    originalPrice: 750000,
    image: 'Images/yugioh/ygo-dueling-mirrors-tin.jpg',
    fallbackImage: 'Images/yugioh/ygo-dueling-mirrors-tin.svg',
    stock: 14,
    status: 'Còn hàng',
    badge: 'BEST VALUE TIN',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: false,
    expansion: '2024 Mega-Tin Dueling Mirrors',
    rarity: 'Metal Tin (3 Mega-Packs)',
    condition: 'Hộp thiếc kim loại nguyên seal',
    description: 'Hộp thiếc Mega-Tin 2024 Dueling Mirrors chứa 3 gói Mega-Pack, mỗi gói cam kết chứa 1 thẻ bài Quarter Century Secret Rare cùng hàng loạt reprint giá trị cao.'
  },
  {
    id: 'ygo-12',
    name: 'Accesscode Talker - Secret Rare (ETCO)',
    game: 'yugioh',
    category: 'single',
    price: 850000,
    originalPrice: 990000,
    image: 'Images/yugioh/ygo-accesscode-talker.jpg',
    fallbackImage: 'Images/yugioh/ygo-accesscode-talker.svg',
    stock: 4,
    status: 'Còn hàng',
    badge: 'META FINISHER',
    badgeClass: 'badge-meta',
    rating: 5,
    isFeatured: false,
    expansion: 'Eternity Code',
    rarity: 'Secret Rare (LINK-4)',
    condition: 'Near Mint',
    description: 'Quái thú Link-4 tối thượng có khả năng tăng vọt sức mạnh lên trên 5300 ATK và dọn sạch toàn bộ sàn đấu của đối phương mà đối thủ không thể kích hoạt bất kỳ chuỗi phản đòn nào.'
  },
  {
    id: 'ygo-13',
    name: 'Yu-Gi-Oh! Structure Deck: Beware of Traptrix',
    game: 'yugioh',
    category: 'structure-deck',
    price: 330000,
    originalPrice: 360000,
    image: 'Images/yugioh/ygo-structure-traptrix.jpg',
    fallbackImage: 'Images/yugioh/ygo-structure-traptrix.svg',
    stock: 12,
    status: 'Còn hàng',
    badge: 'COMPETITIVE',
    badgeClass: 'badge-rare',
    rating: 4.9,
    isFeatured: false,
    expansion: 'Structure Deck Traptrix',
    rarity: 'Pre-constructed Deck (46 Lá)',
    condition: 'Nguyên seal chính hãng',
    description: 'Bộ bài kiểm soát bẫy hố Trap Hole kinh điển của các nàng tiên cây Traptrix, kèm sẵn đầy đủ quái thú Extra Deck Xyz và Link để thi đấu ngay lập tức.'
  },
  {
    id: 'ygo-14',
    name: 'Exodia the Forbidden One - Bộ Trọn 5 Mảnh Vị Thần Bị Phong Ấn',
    game: 'yugioh',
    category: 'single',
    price: 2600000,
    originalPrice: 2900000,
    image: 'Images/yugioh/ygo-exodia-set.jpg',
    fallbackImage: 'Images/yugioh/ygo-exodia-set.svg',
    stock: 2,
    status: 'Còn hàng',
    badge: 'FULL EXODIA SET',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: false,
    expansion: 'Legend of Blue Eyes White Dragon / Reprint',
    rarity: 'Ultra Rare Foil (Set 5 Thẻ)',
    condition: 'Near Mint (Bao gồm khay đựng cao cấp)',
    description: 'Trọn bộ 5 mảnh Exodia huyền thoại: Đầu, Cánh Tay Phải, Cánh Tay Trái, Chân Phải, Chân Trái. Kích hoạt hiệu ứng Tự Động Chiến Thắng không thể ngăn cản khi cầm đủ trên tay.'
  },

  // --- TCG ACCESSORIES (6 sản phẩm) ---
  {
    id: 'acc-01',
    name: 'Bọc bài Dragon Shield Matte Standard - Dual Sleeves (100 Cái)',
    game: 'accessories',
    category: 'accessories',
    price: 280000,
    originalPrice: 310000,
    image: 'Images/products/dragon-shield-sleeves.jpg',
    fallbackImage: 'Images/products/dragon-shield-sleeves.svg',
    stock: 40,
    status: 'Còn hàng',
    badge: 'PREMIUM SLEEVES',
    badgeClass: 'badge-meta',
    rating: 5,
    isFeatured: false,
    expansion: 'Dragon Shield TCG Gear',
    rarity: 'Hộp 100 Bọc Bài',
    condition: 'Mới 100% nguyên hộp',
    description: 'Thương hiệu bọc bài số 1 thế giới với mặt lưng đen tuyền chống lộ bài và mặt vân nhám mịn giúp xáo bài mượt mà tuyệt đối, không trầy xước góc cạnh thẻ.'
  },
  {
    id: 'acc-02',
    name: 'Hộp đựng bài Ultimate Guard Sidewinder 100+ XenoSkin',
    game: 'accessories',
    category: 'accessories',
    price: 490000,
    originalPrice: 550000,
    image: 'Images/products/ultimate-guard-deck-box.jpg',
    fallbackImage: 'Images/products/ultimate-guard-deck-box.svg',
    stock: 15,
    status: 'Còn hàng',
    badge: 'MAGNETIC BOX',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: false,
    expansion: 'Ultimate Guard Premium',
    rarity: 'Deck Box 100+ Double-Sleeved',
    condition: 'Chính hãng Đức nguyên hộp',
    description: 'Hộp đựng bộ bài cao cấp nắp hít nam châm 4 cực cực mạnh bọc da sần XenoSkin chống trơn trượt, lót nhung mềm mại bên trong bảo vệ tối đa 100 lá bài bọc đúp.'
  },
  {
    id: 'acc-03',
    name: 'Thảm thi đấu TCG Playmat cao cấp Charizard & Blue-Eyes Duel (60x35cm)',
    game: 'accessories',
    category: 'accessories',
    price: 380000,
    originalPrice: 450000,
    image: 'Images/products/tcg-duel-playmat.jpg',
    fallbackImage: 'Images/products/tcg-duel-playmat.svg',
    stock: 22,
    status: 'Còn hàng',
    badge: 'EXCLUSIVE PLAYMAT',
    badgeClass: 'badge-rare',
    rating: 5,
    isFeatured: false,
    expansion: 'TCG Arena Arena Playmat Series',
    rarity: 'Thảm Thi Đấu Chuẩn Giải',
    condition: 'Bo viền chống sờn rách',
    description: 'Thảm thi đấu kích thước tiêu chuẩn 60x35cm dày 3mm, đáy cao su tự nhiên chống trượt, mặt vải dệt mật độ cao in nhiệt sắc nét cuộc chiến rồng lửa và rồng trắng.'
  },
  {
    id: 'acc-04',
    name: 'Album đựng bài Ultra Pro 9-Pocket Zippered PRO-Binder (360 Lá)',
    game: 'accessories',
    category: 'accessories',
    price: 620000,
    originalPrice: 690000,
    image: 'Images/products/ultra-pro-binder.jpg',
    fallbackImage: 'Images/products/ultra-pro-binder.svg',
    stock: 11,
    status: 'Còn hàng',
    badge: 'ZIPPER BINDER',
    badgeClass: 'badge-meta',
    rating: 5,
    isFeatured: false,
    expansion: 'Ultra Pro Premium Collection',
    rarity: 'Album Khóa Kéo 20 Trang',
    condition: 'Nguyên bao bì Ultra Pro',
    description: 'Sổ đựng bài chuyên dụng có khóa kéo kín chống bụi bẩn và độ ẩm. Chứa được 360 lá bài nạp từ cạnh bên (Side-Loading) an toàn không bao giờ bị rơi bài khi di chuyển.'
  },
  {
    id: 'acc-05',
    name: 'Toploader Ultra Pro 35pt Kháng Tia UV (Hộp 25 Cái)',
    game: 'accessories',
    category: 'accessories',
    price: 120000,
    originalPrice: 140000,
    image: 'Images/products/ultra-pro-toploader.jpg',
    fallbackImage: 'Images/products/ultra-pro-toploader.svg',
    stock: 50,
    status: 'Còn hàng',
    badge: 'CARD PROTECTION',
    badgeClass: 'badge-new',
    rating: 5,
    isFeatured: false,
    expansion: 'Ultra Pro Supplies',
    rarity: 'Hộp 25 Khay Cứng',
    condition: 'Chính hãng nguyên bọc',
    description: 'Vỏ nhựa cứng trong suốt bảo vệ thẻ bài không bị cong vênh, trầy xước hay ẩm ướt. Tiêu chuẩn quốc tế bắt buộc khi giao dịch và vận chuyển thẻ bài quý giá.'
  },
  {
    id: 'acc-06',
    name: 'Vỏ bảo vệ thẻ từ tính Magnetic One-Touch 35pt Gold Magnet (Set 5 Cái)',
    game: 'accessories',
    category: 'accessories',
    price: 250000,
    originalPrice: 280000,
    image: 'Images/products/magnetic-one-touch.jpg',
    fallbackImage: 'Images/products/magnetic-one-touch.svg',
    stock: 30,
    status: 'Còn hàng',
    badge: 'SHOWCASE CASE',
    badgeClass: 'badge-gold',
    rating: 5,
    isFeatured: false,
    expansion: 'Showcase Displays',
    rarity: 'Set 5 Vỏ Nam Châm',
    condition: 'Chống tia cực tím UV 99%',
    description: 'Hộp mica từ tính hít nam châm vàng cao cấp dành riêng cho thẻ bài đắt tiền trưng bày. Góc khoét kim cương không làm chạm vào góc thẻ bài.'
  }
];

/* ==========================================================================
   2. TRẠNG THÁI ỨNG DỤNG (APPLICATION STATE)
   ========================================================================== */
const AppState = {
  cart: [],
  filters: {
    search: '',
    game: 'all',
    category: 'all',
    priceRange: 'all',
    stockStatus: 'all',
    sort: 'default'
  },
  soundEnabled: true,
  activeModalProduct: null
};

/* ==========================================================================
   3. HỆ THỐNG ÂM THANH (SOUND SYSTEM)
   ========================================================================== */
class SoundManager {
  constructor() {
    this.audioCtx = null;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  play(type) {
    if (!AppState.soundEnabled) return;
    this.initContext();

    const soundFiles = {
      'flip': 'Sounds/card-flip.wav',
      'cart': 'Sounds/add-cart.wav',
      'click': 'Sounds/click.wav',
      'checkout': 'Sounds/checkout.wav'
    };

    const filePath = soundFiles[type];
    if (filePath) {
      const audio = new Audio(filePath);
      audio.volume = 0.45;
      audio.play().catch(() => {
        this.playSynthesized(type);
      });
    } else {
      this.playSynthesized(type);
    }
  }

  playSynthesized(type) {
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      if (type === 'cart') {
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'flip') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'checkout') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(700, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      console.warn('Audio synthesis fallback ignored:', e);
    }
  }
}

const soundManager = new SoundManager();

/* ==========================================================================
   4. CÁC HÀM TIỆN ÍCH (HELPER FUNCTIONS)
   ========================================================================== */
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount).replace('₫', '₫');
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'gold' ? 'toast-gold' : ''}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>`;
  } else if (type === 'gold') {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#E8B84A" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#3978FF" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px) scale(0.9)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

/* ==========================================================================
   5. QUẢN LÝ GIỎ HÀNG (SHOPPING CART & LOCALSTORAGE)
   ========================================================================== */
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('tcg_arena_cart');
    if (saved) {
      AppState.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Lỗi đọc localStorage:', e);
    AppState.cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('tcg_arena_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.error('Lỗi ghi localStorage:', e);
  }
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingItem = AppState.cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  soundManager.play('cart');

  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }

  showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
}

function removeFromCart(productId) {
  const itemIndex = AppState.cart.findIndex(i => i.id === productId);
  if (itemIndex > -1) {
    const itemName = AppState.cart[itemIndex].name;
    AppState.cart.splice(itemIndex, 1);
    saveCartToStorage();
    updateCartUI();
    soundManager.play('click');
    showToast(`Đã xóa "${itemName}" khỏi giỏ hàng.`, 'info');
  }
}

function updateCartItemQuantity(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartToStorage();
  updateCartUI();
  soundManager.play('click');
}

function clearCart() {
  AppState.cart = [];
  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const cartList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartShippingEl = document.getElementById('cartShipping');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartDrawerFooter = document.getElementById('cartDrawerFooter');
  const shippingFill = document.getElementById('shippingProgressFill');
  const shippingText = document.getElementById('shippingProgressText');

  const totalItemsCount = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = AppState.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

  if (badge) {
    badge.textContent = totalItemsCount;
  }

  const FREE_SHIPPING_THRESHOLD = 1000000;
  let shippingFee = 0;

  if (subtotal > 0 && subtotal < FREE_SHIPPING_THRESHOLD) {
    shippingFee = 35000;
    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    if (shippingFill) shippingFill.style.width = `${percent}%`;
    if (shippingText) {
      shippingText.innerHTML = `Mua thêm <strong>${formatVND(remaining)}</strong> để được <strong>FREESHIP toàn quốc!</strong>`;
    }
  } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    shippingFee = 0;
    if (shippingFill) shippingFill.style.width = '100%';
    if (shippingText) {
      shippingText.innerHTML = `🎉 <strong>Chúc mừng! Đơn hàng được MIỄN PHÍ VẬN CHUYỂN!</strong>`;
    }
  } else {
    if (shippingFill) shippingFill.style.width = '0%';
    if (shippingText) {
      shippingText.innerHTML = `Miễn phí giao hàng toàn quốc cho đơn từ <strong>1.000.000₫</strong>`;
    }
  }

  const grandTotal = subtotal + shippingFee;

  if (cartList) {
    if (AppState.cart.length === 0) {
      cartList.innerHTML = `
        <div class="empty-cart-state">
          <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          <h4>Giỏ hàng của bạn đang trống</h4>
          <p>Hãy khám phá các siêu phẩm Pokémon và Yu-Gi-Oh! để bổ sung vào bộ sưu tập ngay!</p>
          <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); document.getElementById('featuredSection').scrollIntoView({behavior:'smooth'});">
            Khám phá sản phẩm
          </button>
        </div>
      `;
      if (cartDrawerFooter) cartDrawerFooter.style.display = 'none';
    } else {
      if (cartDrawerFooter) cartDrawerFooter.style.display = 'block';

      cartList.innerHTML = AppState.cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${item.fallbackImage || 'Images/icons/box.svg'}';">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">${formatVND(item.price)}</div>
            <div class="cart-item-quantity-row">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateCartItemQuantity('${item.id}', -1)" title="Giảm số lượng">−</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartItemQuantity('${item.id}', 1)" title="Tăng số lượng">+</button>
              </div>
              <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" title="Xóa món này">Xóa</button>
            </div>
          </div>
        </div>
      `).join('');

      if (cartSubtotalEl) cartSubtotalEl.textContent = formatVND(subtotal);
      if (cartShippingEl) cartShippingEl.textContent = shippingFee === 0 ? 'Miễn phí' : formatVND(shippingFee);
      if (cartTotalEl) cartTotalEl.textContent = formatVND(grandTotal);
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    soundManager.play('click');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   6. RENDER SẢN PHẨM RA GIAO DIỆN (PRODUCT RENDERING)
   ========================================================================== */
function createProductCardHTML(product) {
  const isOutOfStock = product.stock <= 0;
  const isLowStock = product.stock > 0 && product.stock <= 3;
  
  const stockClass = isOutOfStock ? 'stock-low' : isLowStock ? 'stock-low' : 'stock-in';
  const stockText = isOutOfStock ? 'Hết hàng tạm thời' : isLowStock ? `Chỉ còn ${product.stock} sản phẩm!` : `Còn ${product.stock} sản phẩm`;

  return `
    <article class="product-card" data-id="${product.id}">
      <span class="product-card-badge ${product.badgeClass}">${product.badge}</span>
      <div class="product-image-container" onclick="openProductModal('${product.id}')">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='Images/icons/box.svg'">
        <div class="quick-view-overlay">
          <button class="quick-view-btn" onclick="event.stopPropagation(); openProductModal('${product.id}')">
            Xem chi tiết
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-game-tag">${product.game === 'pokemon' ? 'Pokémon TCG' : product.game === 'yugioh' ? 'Yu-Gi-Oh! TCG' : 'Phụ Kiện TCG'}</span>
        <h3 class="product-name" onclick="openProductModal('${product.id}')" title="${product.name}">${product.name}</h3>
        <div class="product-meta-row">
          <span class="product-stock-tag ${stockClass}">
            <span class="stock-dot"></span>
            ${stockText}
          </span>
        </div>
        <div class="product-price-row">
          <span class="product-price">${formatVND(product.price)}</span>
          ${product.originalPrice ? `<span class="product-original-price">${formatVND(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}', 1)" ${isOutOfStock ? 'disabled' : ''}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            ${isOutOfStock ? 'Tạm hết hàng' : 'Thêm giỏ hàng'}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProductsGrid');
  if (!container) return;

  const featured = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 8);
  container.innerHTML = featured.map(createProductCardHTML).join('');
}

function renderPokemonProducts(filterCategory = 'all') {
  const container = document.getElementById('pokemonProductsGrid');
  if (!container) return;

  let pkmnList = PRODUCTS_DATA.filter(p => p.game === 'pokemon');
  if (filterCategory !== 'all') {
    pkmnList = pkmnList.filter(p => p.category === filterCategory);
  }

  container.innerHTML = pkmnList.map(createProductCardHTML).join('');
}

function renderYugiohProducts(filterCategory = 'all') {
  const container = document.getElementById('yugiohProductsGrid');
  if (!container) return;

  let ygoList = PRODUCTS_DATA.filter(p => p.game === 'yugioh');
  if (filterCategory !== 'all') {
    ygoList = ygoList.filter(p => p.category === filterCategory);
  }

  container.innerHTML = ygoList.map(createProductCardHTML).join('');
}

function renderAccessoriesProducts() {
  const container = document.getElementById('accessoriesProductsGrid');
  if (!container) return;

  const accList = PRODUCTS_DATA.filter(p => p.game === 'accessories');
  container.innerHTML = accList.map(createProductCardHTML).join('');
}

/* ==========================================================================
   7. HỆ THỐNG TÌM KIẾM & BỘ LỌC ĐA NĂNG (SEARCH & FILTER SYSTEM)
   ========================================================================== */
function applyFiltersAndSearch() {
  const resultsContainer = document.getElementById('filterResultsGrid');
  const countDisplay = document.getElementById('filterResultsCount');
  const emptyDisplay = document.getElementById('filterEmptyState');
  if (!resultsContainer) return;

  const { search, game, category, priceRange, stockStatus, sort } = AppState.filters;

  let filtered = [...PRODUCTS_DATA];

  if (search.trim()) {
    const keyword = search.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(keyword) ||
      p.expansion.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    );
  }

  if (game !== 'all') {
    filtered = filtered.filter(p => p.game === game);
  }

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (priceRange !== 'all') {
    if (priceRange === 'under-500') {
      filtered = filtered.filter(p => p.price < 500000);
    } else if (priceRange === '500-1500') {
      filtered = filtered.filter(p => p.price >= 500000 && p.price <= 1500000);
    } else if (priceRange === '1500-3000') {
      filtered = filtered.filter(p => p.price > 1500000 && p.price <= 3000000);
    } else if (priceRange === 'above-3000') {
      filtered = filtered.filter(p => p.price > 3000000);
    }
  }

  if (stockStatus !== 'all') {
    if (stockStatus === 'in-stock') {
      filtered = filtered.filter(p => p.stock > 0);
    } else if (stockStatus === 'low-stock') {
      filtered = filtered.filter(p => p.stock <= 3 && p.stock > 0);
    }
  }

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countDisplay) {
    countDisplay.textContent = `Tìm thấy ${filtered.length} sản phẩm phù hợp`;
  }

  if (filtered.length === 0) {
    resultsContainer.innerHTML = '';
    if (emptyDisplay) emptyDisplay.style.display = 'block';
  } else {
    if (emptyDisplay) emptyDisplay.style.display = 'none';
    resultsContainer.innerHTML = filtered.map(createProductCardHTML).join('');
  }
}

function resetFilters() {
  AppState.filters = {
    search: '',
    game: 'all',
    category: 'all',
    priceRange: 'all',
    stockStatus: 'all',
    sort: 'default'
  };

  const searchInputs = document.querySelectorAll('.searchInput');
  searchInputs.forEach(input => input.value = '');

  const gameSelect = document.getElementById('filterGame');
  if (gameSelect) gameSelect.value = 'all';

  const categorySelect = document.getElementById('filterCategory');
  if (categorySelect) categorySelect.value = 'all';

  const priceSelect = document.getElementById('filterPrice');
  if (priceSelect) priceSelect.value = 'all';

  const stockSelect = document.getElementById('filterStock');
  if (stockSelect) stockSelect.value = 'all';

  const sortSelect = document.getElementById('filterSort');
  if (sortSelect) sortSelect.value = 'default';

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.filterCategory === 'all');
  });

  applyFiltersAndSearch();
  soundManager.play('click');
  showToast('Đã xóa tất cả bộ lọc tìm kiếm.', 'info');
}

/* ==========================================================================
   8. MODAL XEM CHI TIẾT SẢN PHẨM (PRODUCT DETAILS MODAL)
   ========================================================================== */
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  AppState.activeModalProduct = product;
  soundManager.play('flip');

  const modalBackdrop = document.getElementById('productModalBackdrop');
  const modalImg = document.getElementById('modalProductImage');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalPrice = document.getElementById('modalProductPrice');
  const modalOrigPrice = document.getElementById('modalProductOrigPrice');
  const modalDesc = document.getElementById('modalProductDesc');
  const modalBadge = document.getElementById('modalProductBadge');
  const modalExpansion = document.getElementById('modalProductExpansion');
  const modalRarity = document.getElementById('modalProductRarity');
  const modalCondition = document.getElementById('modalProductCondition');
  const modalStock = document.getElementById('modalProductStock');
  const modalQtyInput = document.getElementById('modalQtyInput');

  if (modalImg) modalImg.src = product.image;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = formatVND(product.price);
  
  if (modalOrigPrice) {
    if (product.originalPrice) {
      modalOrigPrice.textContent = formatVND(product.originalPrice);
      modalOrigPrice.style.display = 'inline';
    } else {
      modalOrigPrice.style.display = 'none';
    }
  }

  if (modalDesc) modalDesc.textContent = product.description;
  
  if (modalBadge) {
    modalBadge.className = `product-card-badge ${product.badgeClass}`;
    modalBadge.textContent = product.badge;
  }

  if (modalExpansion) modalExpansion.textContent = product.expansion;
  if (modalRarity) modalRarity.textContent = product.rarity;
  if (modalCondition) modalCondition.textContent = product.condition;
  if (modalStock) {
    modalStock.textContent = product.stock > 0 ? `Còn ${product.stock} hộp/thẻ tại cửa hàng` : 'Hết hàng tạm thời';
    modalStock.className = `modal-spec-val ${product.stock > 0 ? 'stock-in' : 'stock-low'}`;
  }

  if (modalQtyInput) modalQtyInput.value = 1;

  if (modalBackdrop) {
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeProductModal() {
  const modalBackdrop = document.getElementById('productModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
  AppState.activeModalProduct = null;
}

function adjustModalQuantity(delta) {
  const input = document.getElementById('modalQtyInput');
  if (!input) return;

  let current = parseInt(input.value, 10) || 1;
  current += delta;
  if (current < 1) current = 1;
  if (AppState.activeModalProduct && current > AppState.activeModalProduct.stock) {
    current = AppState.activeModalProduct.stock;
    showToast(`Rất tiếc, chỉ còn ${AppState.activeModalProduct.stock} sản phẩm sẵn có!`, 'info');
  }

  input.value = current;
  soundManager.play('click');
}

function addFromModalToCart() {
  if (!AppState.activeModalProduct) return;
  const input = document.getElementById('modalQtyInput');
  const qty = parseInt(input ? input.value : 1, 10) || 1;

  addToCart(AppState.activeModalProduct.id, qty);
  closeProductModal();
}

/* ==========================================================================
   9. XÁC NHẬN THANH TOÁN (CHECKOUT MODAL SIMULATION)
   ========================================================================== */
function proceedCheckout() {
  if (AppState.cart.length === 0) {
    showToast('Giỏ hàng trống! Hãy thêm thẻ bài trước khi thanh toán.', 'info');
    return;
  }

  closeCartDrawer();
  soundManager.play('checkout');

  const checkoutModal = document.getElementById('checkoutModalBackdrop');
  const totalAmountEl = document.getElementById('checkoutSummaryTotal');
  const countEl = document.getElementById('checkoutSummaryCount');

  const total = AppState.cart.reduce((s, i) => s + (i.price * i.quantity), 0);
  const count = AppState.cart.reduce((s, i) => s + i.quantity, 0);

  if (totalAmountEl) totalAmountEl.textContent = formatVND(total);
  if (countEl) countEl.textContent = `${count} sản phẩm thẻ bài`;

  if (checkoutModal) {
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  clearCart();
}

function closeCheckoutModal() {
  const checkoutModal = document.getElementById('checkoutModalBackdrop');
  if (checkoutModal) {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   10. KHỞI TẠO VÀ BẮT SỰ KIỆN TOÀN TRANG (EVENT LISTENERS)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  updateCartUI();

  renderFeaturedProducts();
  renderPokemonProducts();
  renderYugiohProducts();
  renderAccessoriesProducts();
  applyFiltersAndSearch();

  const header = document.querySelector('.site-header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 40);
    }
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      soundManager.play('click');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  const searchToggle = document.getElementById('searchToggleBtn');
  const headerSearchBox = document.getElementById('headerSearchBox');
  const headerSearchInput = document.getElementById('headerSearchInput');

  if (searchToggle && headerSearchBox) {
    searchToggle.addEventListener('click', () => {
      headerSearchBox.classList.toggle('active');
      if (headerSearchBox.classList.contains('active') && headerSearchInput) {
        headerSearchInput.focus();
      }
      soundManager.play('click');
    });
  }

  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      AppState.filters.search = e.target.value;
      const mainSearchInput = document.getElementById('mainSearchInput');
      if (mainSearchInput) mainSearchInput.value = e.target.value;

      applyFiltersAndSearch();

      const filterSection = document.getElementById('filterSection');
      if (filterSection && window.scrollY < filterSection.offsetTop - 200) {
        filterSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const soundToggleBtn = document.getElementById('soundToggleBtn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      soundToggleBtn.style.color = AppState.soundEnabled ? 'var(--accent-gold)' : 'var(--text-dark)';
      showToast(AppState.soundEnabled ? '🔊 Đã BẬT hiệu ứng âm thanh TCG' : '🔇 Đã TẮT hiệu ứng âm thanh', 'info');
      if (AppState.soundEnabled) soundManager.play('click');
    });
  }

  const cartBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (productModalBackdrop) {
    productModalBackdrop.addEventListener('click', (e) => {
      if (e.target === productModalBackdrop) closeProductModal();
    });
  }

  const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckoutModal);
  if (checkoutModalBackdrop) {
    checkoutModalBackdrop.addEventListener('click', (e) => {
      if (e.target === checkoutModalBackdrop) closeCheckoutModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
      closeCheckoutModal();
      if (headerSearchBox) headerSearchBox.classList.remove('active');
    }
  });

  const mainSearchInput = document.getElementById('mainSearchInput');
  if (mainSearchInput) {
    mainSearchInput.addEventListener('input', (e) => {
      AppState.filters.search = e.target.value;
      if (headerSearchInput) headerSearchInput.value = e.target.value;
      applyFiltersAndSearch();
    });
  }

  const filterGame = document.getElementById('filterGame');
  if (filterGame) {
    filterGame.addEventListener('change', (e) => {
      AppState.filters.game = e.target.value;
      applyFiltersAndSearch();
      soundManager.play('click');
    });
  }

  const filterCategory = document.getElementById('filterCategory');
  if (filterCategory) {
    filterCategory.addEventListener('change', (e) => {
      AppState.filters.category = e.target.value;
      document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.filterCategory === e.target.value);
      });
      applyFiltersAndSearch();
      soundManager.play('click');
    });
  }

  const filterPrice = document.getElementById('filterPrice');
  if (filterPrice) {
    filterPrice.addEventListener('change', (e) => {
      AppState.filters.priceRange = e.target.value;
      applyFiltersAndSearch();
      soundManager.play('click');
    });
  }

  const filterStock = document.getElementById('filterStock');
  if (filterStock) {
    filterStock.addEventListener('change', (e) => {
      AppState.filters.stockStatus = e.target.value;
      applyFiltersAndSearch();
      soundManager.play('click');
    });
  }

  const filterSort = document.getElementById('filterSort');
  if (filterSort) {
    filterSort.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
      applyFiltersAndSearch();
      soundManager.play('click');
    });
  }

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.dataset.filterCategory || 'all';
      AppState.filters.category = cat;

      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (filterCategory) filterCategory.value = cat;

      applyFiltersAndSearch();
      soundManager.play('click');
    });
  });

  document.querySelectorAll('.pkmn-subnav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pkmn-subnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.pkmnCategory || 'all';
      renderPokemonProducts(cat);
      soundManager.play('click');
    });
  });

  document.querySelectorAll('.ygo-subnav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ygo-subnav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.ygoCategory || 'all';
      renderYugiohProducts(cat);
      soundManager.play('click');
    });
  });

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`Cảm ơn bạn! Mã giảm giá 10% đã gửi tới: ${input.value}`, 'gold');
        input.value = '';
        soundManager.play('cart');
      }
    });
  }
});

function selectQuickCategory(game, category) {
  AppState.filters.game = game;
  AppState.filters.category = category;

  const filterGame = document.getElementById('filterGame');
  if (filterGame) filterGame.value = game;

  const filterCat = document.getElementById('filterCategory');
  if (filterCat) filterCat.value = category;

  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.filterCategory === category);
  });

  applyFiltersAndSearch();

  const filterSection = document.getElementById('filterSection');
  if (filterSection) {
    filterSection.scrollIntoView({ behavior: 'smooth' });
  }

  soundManager.play('click');
}
