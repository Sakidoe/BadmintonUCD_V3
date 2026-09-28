"""
Replace every photo in public/img/ with a blank placeholder box of the same size.

The template keeps the original file names, so dropping a real photo in with the
same name is all it takes to fill a slot. Art (public/img/art, public/img/hero)
and the Davis Fall Open photos are left alone.

    python3 scripts/make_placeholders.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "public" / "img"

# Photos that belong to the Davis Fall Open page, which is kept as-is.
KEEP = {p.name for p in IMG.glob("davis-open-*.jpg")} | {"uc-center.jpg"}

FILL = (239, 230, 214)      # warm cream-grey, sits well on the site's cream palette
LINE = (200, 188, 168)
TEXT = (150, 138, 118)
FONT = "/usr/share/fonts/truetype/google-fonts/Poppins-Medium.ttf"


# Background banners sit behind the hero copy, so they get a quiet box: no icon, label in the corner.
PLAIN = {"hero-formal.jpg"}


def plain(w: int, h: int) -> Image.Image:
    im = Image.new("RGB", (w, h), FILL)
    d = ImageDraw.Draw(im)
    f = ImageFont.truetype(FONT, max(14, int(min(w, h) * 0.022)))
    text = f"[ banner photo · {w} × {h} ]"
    tw = d.textlength(text, font=f)
    d.text(((w - tw) / 2, h * 0.93), text, fill=LINE, font=f)
    return im


def placeholder(w: int, h: int) -> Image.Image:
    im = Image.new("RGB", (w, h), FILL)
    d = ImageDraw.Draw(im)
    m = min(w, h)
    # dashed inset frame
    inset, dash, gap, lw = int(m * 0.04), int(m * 0.03), int(m * 0.02), max(2, m // 220)
    x0, y0, x1, y1 = inset, inset, w - inset, h - inset
    for x in range(x0, x1, dash + gap):
        d.line([(x, y0), (min(x + dash, x1), y0)], fill=LINE, width=lw)
        d.line([(x, y1), (min(x + dash, x1), y1)], fill=LINE, width=lw)
    for y in range(y0, y1, dash + gap):
        d.line([(x0, y), (x0, min(y + dash, y1))], fill=LINE, width=lw)
        d.line([(x1, y), (x1, min(y + dash, y1))], fill=LINE, width=lw)
    # picture icon: frame + sun + mountains
    s = m * 0.16
    cx, cy = w / 2, h / 2 - m * 0.05
    fw = max(3, int(s * 0.07))
    box = [cx - s, cy - s * 0.72, cx + s, cy + s * 0.72]
    d.rounded_rectangle(box, radius=s * 0.14, outline=TEXT, width=fw)
    r = s * 0.16
    d.ellipse([cx + s * 0.35 - r, cy - s * 0.32 - r, cx + s * 0.35 + r, cy - s * 0.32 + r], fill=TEXT)
    d.polygon([(cx - s * 0.78, cy + s * 0.55), (cx - s * 0.25, cy - s * 0.12), (cx + s * 0.2, cy + s * 0.55)], fill=TEXT)
    d.polygon([(cx - s * 0.05, cy + s * 0.55), (cx + s * 0.35, cy + s * 0.1), (cx + s * 0.78, cy + s * 0.55)], fill=TEXT)
    # label
    font = ImageFont.truetype(FONT, max(14, int(m * 0.055)))
    small = ImageFont.truetype(FONT, max(11, int(m * 0.036)))
    ty = box[3] + m * 0.05
    for text, f in (("[ photo ]", font), (f"{w} × {h}", small)):
        tw = d.textlength(text, font=f)
        d.text((cx - tw / 2, ty), text, fill=TEXT, font=f)
        ty += f.size * 1.35
    return im


def main() -> None:
    done = 0
    for path in sorted(IMG.glob("*.jpg")):
        if path.name in KEEP:
            continue
        with Image.open(path) as src:
            w, h = src.size
        (plain if path.name in PLAIN else placeholder)(w, h).save(path, quality=82, optimize=True)
        done += 1
    print(f"replaced {done} photos, kept {len(KEEP)} Fall Open photos")


if __name__ == "__main__":
    main()
