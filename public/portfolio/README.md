# Portfolio photos

Drop real project photos here, one folder per category (matches your ZIP):

| ZIP folder            | Put files in                  |
| --------------------- | ----------------------------- |
| 01 LED Signages       | `01-led-signages/`            |
| 02 In-Shop Branding   | `02-in-shop-branding/`        |
| 03 Outdoor Branding   | `03-outdoor-branding/`        |
| 04 Flex & Banners     | `04-flex-banners/`            |
| 05 Digital Signage    | `05-digital-signage/`         |
| 06 Other Branding     | `06-other-branding/`          |

Then register each project in `src/lib/portfolio.ts` using `img(category, filename, width, height)`.

Tips: export JPG/WebP at ~1600px on the long edge (≤ 400 KB each); lowercase
filenames without spaces (`shop-front-01.jpg`).
