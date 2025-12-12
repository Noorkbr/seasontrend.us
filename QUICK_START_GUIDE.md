# Quick Start Guide: Arctic Neo-Luxury UI/UX

## 🚀 Getting Started

### Option 1: View Standalone Demo (Easiest)

Open in a browser:
```
demo/arctic-neo-luxury-demo.html
```

This shows all four sections without needing Shopify.

### Option 2: Shopify Theme Integration

#### Step 1: Upload Files

If using Shopify CLI:
```bash
# Upload all files
shopify theme push

# Or upload specific files
shopify theme push --only=assets/arctic-neo-luxury.css
shopify theme push --only=assets/arctic-neo-luxury.js
shopify theme push --only=sections/arctic-*.liquid
```

#### Step 2: Create Demo Page

1. Go to **Online Store** > **Pages** in Shopify admin
2. Click **Add page**
3. Enter page details:
   - Title: "Arctic Demo"
   - Template: Select **page.arctic-demo**
4. Click **Save**
5. Click **View page** to see the result

#### Step 3: Add to Homepage (Optional)

1. Go to **Online Store** > **Themes** > **Customize**
2. Select the page/template you want to edit
3. Click **Add section**
4. Under **Arctic Neo-Luxury**, add:
   - Arctic Hero Portal
   - Holographic Product Grid
   - Viral Trust Wall
   - Snowglobe Footer
5. Customize each section's settings
6. Click **Save**

## ⚙️ Customization Guide

### Customize Colors

Edit `assets/arctic-neo-luxury.css` and change CSS variables:

```css
:root {
    --arctic-void: #05080F;              /* Background */
    --arctic-aurora-cyan: #00F2FF;       /* Primary glow */
    --arctic-aurora-purple: #BD00FF;     /* Secondary glow */
}
```

### Customize Hero Section

In Shopify Theme Customizer:
1. Select **Arctic Hero Portal** section
2. Edit:
   - Headline text
   - Subheadline
   - CTA button text and link
   - Upload product image

### Customize Product Grid

In Shopify Theme Customizer:
1. Select **Holographic Product Grid** section
2. Edit:
   - Section title
   - Select collection to display
   - Number of products (3-12)
   - View All button text and link

### Add Customer Videos

In Shopify Theme Customizer:
1. Select **Viral Trust Wall** section
2. Click **Add video** block
3. For each video:
   - Enter video URL (MP4)
   - Or upload video file
   - Toggle verified badge
   - Customize badge text

### Customize Snowglobe

In Shopify Theme Customizer:
1. Select **Snowglobe Footer** section
2. Edit:
   - Discount code (revealed on shake)
   - Discount label text
   - CTA button text and link
   - Show/hide shake hint

## 🎨 Styling Tips

### Adjust Particle Count (Performance)

Edit `assets/arctic-neo-luxury.js`, line ~52:

```javascript
// Reduce for slower devices
const numberOfParticles = Math.min(
    Math.floor((canvas.width * canvas.height) / 20000), // Increase divisor
    100 // Reduce max
);
```

### Adjust Snow Particles

Edit `assets/arctic-neo-luxury.js`, line ~293:

```javascript
// Reduce for slower devices
for (let i = 0; i < 20; i++) { // Change from 30 to 20
    // ...
}
```

### Change Button Glow Intensity

Edit `assets/arctic-neo-luxury.css`, line ~135:

```css
.glass-pill-btn:hover {
    box-shadow: 0 0 80px rgba(0, 242, 255, 0.6), /* Adjust intensity */
                0 0 160px rgba(189, 0, 255, 0.6);
}
```

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Hero loads with particles animating
- [ ] Headline has shimmer effect
- [ ] Button glows on hover
- [ ] Product cards tilt on hover
- [ ] Quick Buy buttons appear on hover
- [ ] Trust wall scrolls with mouse drag
- [ ] Videos show verified badges
- [ ] Snowglobe appears in bottom-right
- [ ] Shake mouse rapidly over snowglobe
- [ ] Glass cracks and discount reveals

### Mobile Testing
- [ ] All sections visible and styled
- [ ] Touch scroll works on trust wall
- [ ] Buttons are tappable
- [ ] Product cards display properly
- [ ] Snowglobe is appropriately sized
- [ ] Text is readable
- [ ] No horizontal scroll issues

### Browser Testing
Test in:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

## 🐛 Troubleshooting

### Particles not showing
**Solution:** Check browser console. Canvas needs to render.

### GSAP animations not working
**Solution:** Verify GSAP loaded: Open console, type `gsap` - should not be undefined.

### Snowglobe not appearing
**Solution:** Verify Matter.js loaded: Open console, type `Matter` - should not be undefined.

### Glass effects not working
**Solution:** Check if browser supports `backdrop-filter`. Safari needs `-webkit-backdrop-filter`.

### Videos not scrolling
**Solution:** Ensure video-track has content and drag handlers are working.

## 📱 Mobile Optimization

Mobile optimizations are automatic via media queries at 768px:
- Reduced particle count
- Smaller snowglobe
- Adjusted font sizes
- Touch-optimized interactions
- Simplified animations

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format, 600x600px max
2. **Compress Videos**: Keep under 2MB, use H.264 codec
3. **Lazy Load**: Consider adding lazy loading for off-screen elements
4. **Reduce Particles**: Lower particle count on mobile
5. **Preload Fonts**: Add font preload in theme.liquid

## 📚 Additional Resources

- **Full Documentation**: See `ARCTIC_NEO_LUXURY_README.md`
- **Design System**: Colors, typography, effects detailed
- **API Reference**: All JavaScript functions documented
- **CSS Variables**: Complete list in CSS file

## 🎉 Next Steps

1. **Test in staging** environment first
2. **Customize** content via theme editor
3. **Add real products** to product grid
4. **Upload customer videos** for trust wall
5. **Set real discount codes** in snowglobe
6. **Publish** to live store

## 💡 Pro Tips

- **Shake Detection**: Requires fast, sustained mouse movement for 3 seconds
- **Infinite Scroll**: Drag horizontally on trust wall, it will loop seamlessly
- **Product Hover**: Move mouse slowly over cards to see full tilt effect
- **Magnetic Button**: Move cursor near button edge to see magnetic pull
- **Parallax**: Move mouse around hero section to see layers shift

## 🆘 Support

For issues or questions:
1. Check `ARCTIC_NEO_LUXURY_README.md` troubleshooting section
2. Verify all files are uploaded correctly
3. Check browser console for errors
4. Ensure GSAP and Matter.js are loading

---

**Ready to impress your customers with Arctic Neo-Luxury! ❄️✨**
