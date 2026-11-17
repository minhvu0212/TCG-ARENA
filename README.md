# TCG ARENA – WEBSITE THƯƠNG MẠI ĐIỆN TỬ BÁN THẺ BÀI POKÉMON & YU-GI-OH!

Chào mừng bạn đến với **TCG ARENA** – Dự án thiết kế và phát triển website thương mại điện tử chuyên nghiệp dành riêng cho cộng đồng bài thủ đam mê **Pokémon Trading Card Game** và **Yu-Gi-Oh! Trading Card Game**.

Website được xây dựng theo phong cách **PREMIUM TCG E-COMMERCE**, giao diện hiện đại, hình ảnh sản phẩm nổi bật, âm thanh sống động và tối ưu hóa trải nghiệm người dùng trên mọi thiết bị.

---

## I. GIỚI THIỆU DỰ ÁN

- **Tên dự án:** TCG ARENA.
- **Mục tiêu:** Website bán thẻ bài TCG trực tuyến phục vụ bài thủ, nhà sưu tầm thẻ với đầy đủ danh mục:
  - Pokémon Booster Box, Booster Pack, Elite Trainer Box (ETB), Single Cards, Collection Boxes.
  - Yu-Gi-Oh! Booster Box, Booster Pack, Structure Deck, Quarter Century Secret Rare Singles, Mega-Tins.
  - Phụ kiện TCG cao cấp: Bọc bài Dragon Shield, Hộp đựng Ultimate Guard, Thảm thi đấu Playmat, Toploader UV, Album Pro-Binder, Vỏ từ tính Magnetic One-Touch.
- **Đối tượng:** Sinh viên học thực hành môn Thiết kế Web (HTML5, CSS3, JavaScript cơ bản). Mã nguồn được tổ chức trong sáng, dễ đọc, có chú thích chi tiết, không phụ thuộc vào framework phức tạp.

---

## II. CÔNG NGHỆ SỬ DỤNG

- **HTML5:** Cấu trúc ngữ nghĩa chuẩn SEO (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`).
- **CSS3:**
  - Bảng màu chủ đạo: Đen (`#101114`), Xanh navy (`#171C2B`), Xanh điện (`#3978FF`), Vàng ánh kim (`#E8B84A`), Trắng (`#FFFFFF`).
  - Hệ thống biến CSS (CSS Variables), Flexbox, CSS Grid.
  - Hiệu ứng đổ bóng Neon Glow, hiệu ứng ánh kim lấp lánh (Holographic Foil Sheen), hiệu ứng chuyển động mượt mà (Transitions & Keyframe Animations).
  - Responsive hoàn chỉnh trên Desktop/Laptop, Máy tính bảng (Tablet) và Điện thoại di động (Mobile).
- **JavaScript thuần (Vanilla JS):**
  - Không sử dụng bất kỳ thư viện hoặc framework nào (No React, No Next.js, No Vue, No Angular, No Node.js backend).
  - Quản lý giỏ hàng với `localStorage` (lưu trữ giỏ hàng khi tải lại trang hoặc đóng trình duyệt).
  - Tính năng tìm kiếm tức thì theo từ khóa.
  - Bộ lọc đa năng (theo Tựa Game, Thể loại, Mức giá, Tình trạng hàng, Sắp xếp).
  - Xem nhanh chi tiết thẻ bài qua Modal Popup.
  - Hệ thống thông báo nổi (Toast Notifications).
  - Hệ thống âm thanh tương tác đa phương tiện (Sounds & Web Audio API fallback).

---

## III. CẤU TRÚC THƯ MỤC CHÍNH XÁC

Cấu trúc dự án tuân thủ nghiêm ngặt theo quy định:

```text
TCG-ARENA/
│
├── index.html                   # Trang chủ chính của website
│
├── Images/                      # Tất cả hình ảnh và đồ họa vector
│   ├── logo/                    # Logo và favicon TCG ARENA
│   │   ├── logo.svg
│   │   └── favicon.svg
│   ├── banners/                 # Banner lớn (Hero, Pokémon, Yu-Gi-Oh!, Promo)
│   │   ├── hero-banner.svg
│   │   ├── pokemon-banner.svg
│   │   ├── yugioh-banner.svg
│   │   └── promo-banner.svg
│   ├── pokemon/                 # Ảnh sản phẩm Pokémon (Booster Box, ETB, Pack, Thẻ lẻ)
│   │   ├── pkmn-151-booster-box.svg
│   │   ├── pkmn-151-pack.svg
│   │   ├── pkmn-charizard-collection-box.svg
│   │   ├── pkmn-charizard-ex-sir.svg
│   │   ├── pkmn-crown-zenith-etb.svg
│   │   ├── pkmn-iono-sir.svg
│   │   ├── pkmn-mew-gold.svg
│   │   ├── pkmn-paldean-fates-etb.svg
│   │   ├── pkmn-pikachu-ex-sir.svg
│   │   ├── pkmn-prismatic-bundle.svg
│   │   ├── pkmn-surging-sparks-box.svg
│   │   ├── pkmn-surging-sparks-pack.svg
│   │   ├── pkmn-twilight-pack.svg
│   │   └── pkmn-umbreon-vmax-alt.svg
│   ├── yugioh/                  # Ảnh sản phẩm Yu-Gi-Oh! (Booster Box, Deck, Pack, QCR)
│   │   ├── ygo-accesscode-talker.svg
│   │   ├── ygo-age-of-overlord-pack.svg
│   │   ├── ygo-ash-blossom-qcr.svg
│   │   ├── ygo-blue-eyes-qcr.svg
│   │   ├── ygo-dark-magician-qcr.svg
│   │   ├── ygo-dueling-mirrors-tin.svg
│   │   ├── ygo-exodia-set.svg
│   │   ├── ygo-legacy-destruction-pack.svg
│   │   ├── ygo-phantom-nightmare-box.svg
│   │   ├── ygo-rarity-collection-2-box.svg
│   │   ├── ygo-slifer-god.svg
│   │   ├── ygo-structure-crimson-king.svg
│   │   ├── ygo-structure-fire-kings.svg
│   │   └── ygo-structure-traptrix.svg
│   ├── products/                # Ảnh sản phẩm phụ kiện TCG (Dragon Shield, Toploader...)
│   │   ├── dragon-shield-sleeves.svg
│   │   ├── magnetic-one-touch.svg
│   │   ├── tcg-duel-playmat.svg
│   │   ├── ultimate-guard-deck-box.svg
│   │   ├── ultra-pro-binder.svg
│   │   └── ultra-pro-toploader.svg
│   └── icons/                   # Icon tiện ích (box, pack, single, cart, shield...)
│       ├── accessory.svg
│       ├── box.svg
│       ├── cart.svg
│       ├── deck.svg
│       ├── exchange.svg
│       ├── pack.svg
│       ├── search.svg
│       ├── shield.svg
│       ├── single.svg
│       ├── support.svg
│       └── truck.svg
│
├── Scripts/
│   └── script.js                # Toàn bộ logic tương tác JavaScript thuần
│
├── Sounds/                      # Âm thanh hiệu ứng lật thẻ, thêm giỏ hàng, đặt mua
│   ├── add-cart.wav
│   ├── card-flip.wav
│   ├── checkout.wav
│   └── click.wav
│
├── Styles/
│   └── style.css                # Toàn bộ định dạng giao diện CSS3
│
├── Videos/
│   └── README.md                # Thư mục lưu trữ video giới thiệu sản phẩm
│
└── README.md                    # Tài liệu hướng dẫn sử dụng và triển khai
```

---

## IV. TÍNH NĂNG NỔI BẬT

1. **Header cố định thông minh:**
   - Cố định trên đầu trang với hiệu ứng kính mờ (Glassmorphism).
   - Tích hợp thanh tìm kiếm nhanh, nút bật/tắt âm thanh, nút giỏ hàng và huy hiệu đếm số lượng trực tiếp.
   - Menu điều hướng mượt mà, hỗ trợ menu thu gọn (Hamburger Menu) trên điện thoại.
2. **Hero Banner cuốn hút:**
   - Tiêu đề: *ENTER THE WORLD OF TCG – Collect. Trade. Battle.*
   - Hai nút chuyển vùng nhanh: *Explore Pokémon* và *Explore Yu-Gi-Oh!*.
3. **Danh mục 8 thể loại chính:**
   - Hỗ trợ chọn nhanh từng thể loại: Pokémon Booster Box, Pack, Single Cards, ETB, Yu-Gi-Oh! Booster Box, Structure Deck, Singles, Accessories.
4. **Bộ sưu tập Sản phẩm nổi bật (Featured Products):**
   - Tối thiểu 8 sản phẩm tinh tuyển với nhãn HOT, NEW, ULTRA RARE, GRAIL CARD.
5. **Khu vực chuyên biệt Pokémon TCG (14 sản phẩm):**
   - Đầy đủ Booster Box Nhật/Anh, Pack lẻ, ETB Crown Zenith & Paldean Fates, cùng các thẻ lẻ bài quý: Charizard ex SIR, Pikachu ex SIR, Moonbreon, Mew Gold, Iono SIR.
6. **Khu vực chuyên biệt Yu-Gi-Oh! TCG (14 sản phẩm):**
   - Hộp Rarity Collection II All-Foil, Phantom Nightmare, Structure Deck Fire Kings & Crimson King, Thẻ 25th Quarter Century Secret Rare Blue-Eyes, Dark Magician, Ash Blossom, Exodia full bộ.
7. **Khu vực Phụ kiện chuyên nghiệp (6 sản phẩm):**
   - Bọc bài Dragon Shield Matte Dual, Hộp đựng Ultimate Guard XenoSkin, Thảm Playmat chuẩn giải, Sổ thẻ Ultra Pro Zipper, Toploader UV, Vỏ từ tính Magnetic One-Touch.
8. **Bộ lọc & Tìm kiếm đa năng:**
   - Tìm kiếm theo tên sản phẩm theo thời gian thực (Real-time Search).
   - Lọc theo Tựa Game (Pokémon, Yu-Gi-Oh!, Phụ kiện).
   - Lọc theo Thể loại sản phẩm.
   - Lọc theo Khoảng giá (Dưới 500k, 500k-1.5tr, 1.5tr-3tr, Trên 3tr).
   - Lọc theo Tình trạng hàng (Còn hàng / Sắp hết hàng).
   - Sắp xếp theo Giá (Tăng dần, Giảm dần), Tên A-Z, Đánh giá.
9. **Ngăn kéo giỏ hàng (Shopping Cart Drawer):**
   - Thêm sản phẩm, xóa sản phẩm, tăng/giảm số lượng.
   - Tự động tính tạm tính, phí ship và tổng tiền.
   - Thanh tiến độ ưu đãi: **Miễn phí vận chuyển toàn quốc cho đơn hàng từ 1.000.000₫**.
   - Lưu trữ dữ liệu giỏ hàng bền vững bằng `localStorage`.
10. **Xem chi tiết sản phẩm (Product Details Modal):**
    - Hiển thị ảnh phóng to chất lượng cao, nhãn độ hiếm, tình trạng thẻ (Near Mint / Nguyên seal), mô tả chi tiết và chọn số lượng.
11. **Mô phỏng thanh toán & Đặt hàng thành công:**
    - Modal xác nhận đặt mua hiển thị mã đơn hàng, tổng số thẻ bài và tổng giá trị thanh toán.

---

## V. HƯỚNG DẪN CHẠY WEBSITE BẰNG VS CODE LIVE SERVER

Website hoàn toàn tĩnh (Static Website), không cần cài đặt Node.js hay chạy lệnh build:

1. **Bước 1:** Cài đặt phần mềm [Visual Studio Code](https://code.visualstudio.com/) (nếu chưa có).
2. **Bước 2:** Mở VS Code, nhấn vào biểu tượng **Extensions** (hoặc nhấn `Ctrl + Shift + X`).
3. **Bước 3:** Tìm kiếm từ khóa `Live Server` (tác giả: Ritwick Dey) và nhấn **Install**.
4. **Bước 4:** Mở thư mục dự án `TCG-ARENA` trong VS Code (`File` -> `Open Folder...`).
5. **Bước 5:** Nhấp chuột phải vào file `index.html` và chọn **Open with Live Server** (hoặc nhấn tổ hợp phím `Alt + L, Alt + O`).
6. **Bước 6:** Trình duyệt web sẽ tự động mở trang web tại địa chỉ:
   ```text
   http://127.0.0.1:5500/index.html
   ```

*(Bạn cũng có thể mở trực tiếp file `index.html` bằng cách nhấp đúp chuột vào file trên máy tính mà không cần web server!)*

---

## VI. HƯỚNG DẪN ĐƯA WEBSITE LÊN GITHUB

Để lưu trữ mã nguồn và chia sẻ dự án qua Git & GitHub:

### 1. Chuẩn bị Git trên máy tính
- Mở **Terminal** hoặc **Git Bash** trong thư mục dự án `TCG-ARENA`.

### 2. Khởi tạo Git Repository và Commit
```bash
# 1. Khởi tạo kho chứa Git cục bộ
git init

# 2. Thêm tất cả các file vào khu vực chuẩn bị
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: Khoi tao du an website TCG ARENA hoan chinh"
```

### 3. Tạo Repository trên GitHub
1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Nhấn vào dấu `+` ở góc trên cùng bên phải và chọn **New repository**.
3. Đặt tên repository là `TCG-ARENA` (hoặc tên tùy thích).
4. Chọn chế độ **Public**.
5. Nhấn **Create repository** (không cần tích chọn Add README vì dự án đã có sẵn).

### 4. Đẩy mã nguồn lên GitHub
```bash
# Đổi tên nhánh chính thành main
git branch -M main

# Liên kết với kho chứa trên GitHub (thay <username> bằng tài khoản GitHub của bạn)
git remote add origin https://github.com/<username>/TCG-ARENA.git

# Đẩy toàn bộ mã nguồn lên GitHub
git push -u origin main
```

---

## VII. HƯỚNG DẪN BẬT GITHUB PAGES ĐỂ CÔNG KHAI WEBSITE

Sau khi đẩy mã nguồn lên GitHub, bạn có thể xuất bản website trực tuyến hoàn toàn miễn phí:

1. Truy cập vào Repository `TCG-ARENA` của bạn trên GitHub.
2. Nhấp vào tab **Settings** (ở thanh menu phía trên).
3. Tại thanh điều hướng bên trái, tìm và chọn mục **Pages**.
4. Tại phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`.
   - **Branch:** Chọn `main`, thư mục để mặc định là `/(root)`.
5. Nhấn **Save**.
6. Đợi khoảng 1 - 2 phút, GitHub Pages sẽ tạo xong đường link website. Tải lại trang Settings -> Pages bạn sẽ thấy thông báo:
   ```text
   Your site is live at https://<username>.github.io/TCG-ARENA/
   ```
7. Nhấp vào đường link trên để truy cập và trải nghiệm website online!

> **Lưu ý kiểm tra:**
> - Toàn bộ đường dẫn tài nguyên trong dự án đều sử dụng đường dẫn tương đối (như `Styles/style.css`, `Scripts/script.js`, `Images/...`), không dùng dấu gạch chéo `/` ở đầu, đảm bảo hiển thị hoàn hảo 100% trên GitHub Pages.
> - Tên thư mục và file tuân thủ chính xác chữ hoa - chữ thường theo chuẩn hệ điều hành Linux của GitHub.

---

## VIII. KẾT QUẢ ĐẠT ĐƯỢC

- Hoàn thành đầy đủ 100% các tiêu chí giao diện và chức năng của bài thực hành môn Thiết kế Web.
- Giao diện đạt chuẩn **Premium TCG E-Commerce**: màu sắc hài hòa, hiệu ứng thẻ bài chân thực, âm thanh tương tác thú vị.
- Tương thích đa nền tảng và sẵn sàng nộp bài hoặc triển khai công khai.
