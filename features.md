# Project Detail Pages - Technical Specification

## Overview
Creating dedicated, cinematic project pages for portfolio projects with Apple-inspired design, featuring video demonstrations in device frames with horizontal scrolling and auto-play functionality.

---

## Design Philosophy
- **Inspiration**: Apple.com product pages (specifically iPhone Air)
- **Approach**: Cinematic, full-screen sections with scroll-driven animations
- **Content Balance**: Detailed but digestible - story-driven with visual focus
- **User Experience**: Smooth, intuitive navigation with minimal friction

---

## Page Structure

Each project page follows this vertical scroll flow:

### 1. Hero Section (100vh)
**Purpose**: Make immediate impact, establish project identity

**Content**:
- Full-screen background (gradient based on project brand color)
- Device mockup with hero screenshot (floating/elevated style)
- Project name (large, bold typography)
- One-line tagline
- Subtle scroll indicator

**Animations**:
- Parallax effect on background
- Device mockup subtle float animation (3s loop)
- Text fade-in + slide-up on load
- Scroll indicator pulse

**Technical**:
```tsx
- Fixed positioning during viewport
- Framer Motion for animations
- CSS perspective transforms for device depth
- Brand color theming
```

---

### 2. Problem Section (100vh)
**Purpose**: Establish context and user pain points

**Layout**: Split layout
- Left: Image/illustration
- Right: Text content

**Content**:
- Section title: "The Problem"
- 2-3 sentence problem statement
- 3-4 bullet points of specific pain points
- Supporting image

**Animations**:
- Fade-in on scroll entry
- Staggered text reveal
- Image scale/parallax effect

---

### 3. Solution Section (100vh)
**Purpose**: Explain how the project solves the problem

**Layout**: Centered content

**Content**:
- Section title: "The Solution"
- 2-3 sentence solution overview
- 3-5 key highlight points
- Optional: Small visual/icon set

**Animations**:
- Fade + scale on entry
- Highlight points stagger in
- Subtle background gradient shift

---

### 4. Features Showcase (100vh + Horizontal Scroll) ⭐ **KEY FEATURE**
**Purpose**: Demonstrate main features with video in device frames

**Layout**: Horizontal carousel with snap scrolling

**Content per Feature Card**:
- iPhone device frame (SVG)
- Video playing inside frame (10-15 second loop)
- Feature title below device
- Feature description (1-2 sentences)
- Progress dots indicating position (● ○ ○)

**Number of Features**: 3 video features per project

**Interaction**:
- User scrolls left/right manually
- Snap to center on each card
- Touch/swipe on mobile
- Videos auto-play when card is centered
- Videos pause when out of view

**"Play All" Feature**:
- Button positioned top-right: "▶ Play All"
- Click to auto-advance through all 3 features
- Pauses 6 seconds on each feature
- Button changes to "⏸ Pause" during playback
- User can interrupt by manual scrolling
- Stops at end (doesn't loop back to start)

**Scroll Behavior**:
```css
- scroll-snap-type: x mandatory
- scroll-snap-align: center
- scroll-behavior: smooth
- Each card: 100vw width
- Native scroll (no hijacking)
```

**Video Specifications**:
- Format: MP4 (H.264)
- Resolution: 1170 x 2532 (iPhone 14 Pro)
- Duration: 10-15 seconds
- File size: 1-3 MB each
- Loop: Seamless infinite loop
- Audio: None (muted)
- Autoplay: Yes (when in viewport)
- Created in: Adobe After Effects

**Device Frame Style**:
- Straight-on view with subtle depth
- CSS transforms for floating effect
- Shadow and highlight for realism
- Optional: subtle hover tilt
- Brand color accent (very subtle)

**Animations**:
- Device float animation (slow up/down)
- Card scale when centered (1.05x)
- Text fade-in after card settles
- Video fade-in after load

**Technical Implementation**:
```tsx
- Intersection Observer for video play/pause
- useRef for scroll container
- scroll event listener for active card detection
- setTimeout chain for "Play All" advancement
- scrollTo() with smooth behavior
```

---

### 5. Additional Features Section (50vh)
**Purpose**: List other notable features without videos

**Layout**: Text-based, compact

**Content**:
- Section title: "More Features"
- Bulleted list or icon grid
- 5-7 additional features (text only)
- Brief descriptions

**Animations**:
- Simple fade-in
- Staggered list items

---

### 6. Tech Stack Section (100vh)
**Purpose**: Showcase technologies used

**Layout**: Icon grid or grouped cards

**Content**:
- Section title: "Built With"
- Technology icons with names
- Grouped by category:
  - Frontend
  - Backend
  - Infrastructure
  - Tools

**Animations**:
- Icons stagger in
- Hover effects (lift + glow)
- Scale on entrance

**Technical**:
- SVG icons for each technology
- Grouped by category with labels
- Responsive grid layout

---

### 7. Impact/Achievements Section (100vh)
**Purpose**: Demonstrate project success with metrics

**Layout**: Centered stat cards

**Content**:
- 3-4 key metrics displayed as large numbers
- Examples:
  - 10,000+ Downloads
  - 8,500 Active Users
  - 95% Satisfaction Rate
  - Winner: Best App Award

**Animations**:
- Number counter animation (count up from 0)
- Stagger each stat card
- Scale + fade entrance
- Subtle pulse on hover

**Technical**:
```tsx
- Intersection Observer triggers count
- JavaScript counter with interval
- Easing function for natural count-up
```

---

### 8. Screenshots Gallery (100vh + Horizontal Scroll)
**Purpose**: Show additional app views

**Layout**: Horizontal carousel similar to features section

**Content**:
- 5-8 app screenshots
- Each in device frame
- No videos (static images)
- Optional captions

**Interaction**:
- Same horizontal scroll as features
- Snap to each screenshot
- Swipe-friendly on mobile
- No "Play All" button (static images)

**Technical**:
- Same scroll implementation as features
- Optimized images (Next.js Image)
- Lazy loading

---

### 9. Call-to-Action Section (100vh)
**Purpose**: Provide access to the project

**Layout**: Centered content with prominent buttons

**Content**:
- Heading: "Access the App" or "Try It Yourself"
- Download/access buttons:
  - App Store (if applicable)
  - Play Store (if applicable)
  - GitHub repository
  - Live demo link
  - Case study PDF
- Optional: QR code for mobile download

**Animations**:
- Fade-in on scroll
- Button hover effects (scale, color shift)
- Gradient background animation

**Technical**:
- Styled link buttons
- Opens in new tab
- Tracking/analytics on clicks

---

## Navigation System

### Header (Sticky)
**Content**:
- Top-left: "← Back to Portfolio" link
- Top-right: Project dropdown selector

**Project Dropdown**:
```
Current: Uni Info SA ▼
  ├─ Uni Info SA ✓
  ├─ Biki
  ├─ SafePay
  ├─ SeaClear
  └─ GridSmart
```

**Behavior**:
- Fades in after hero section scroll
- Sticky position
- Instant navigation (no page transitions)
- Glass morphism background

---

## Projects Included

1. **Uni Info SA** (University search app)
   - Brand Color: #5AB5E1 (blue)
   - Platform: iOS (React Native)

2. **Biki** (Bike sharing)
   - Brand Color: #4CAF50 (green)
   - Platform: Mobile

3. **SafePay** (Payment app)
   - Brand Color: #6A63F6 (purple)
   - Platform: Mobile

4. **SeaClear** (Ocean cleanup)
   - Brand Color: #5B9BD5 (ocean blue)
   - Platform: Web/Mobile

5. **GridSmart** (Energy management)
   - Brand Color: #1F3A52 (dark blue)
   - Platform: Embedded/IoT

---

## Routing Architecture

**File Structure**:
```
src/
├─ app/
│  ├─ projects/
│  │  └─ [slug]/
│  │     └─ page.tsx          (Dynamic route)
│  └─ page.tsx                 (Homepage)
├─ components/
│  └─ projects/
│     ├─ ProjectHero.tsx
│     ├─ ProjectProblem.tsx
│     ├─ ProjectSolution.tsx
│     ├─ ProjectFeatures.tsx   (horizontal scroll + videos)
│     ├─ ProjectAdditionalFeatures.tsx
│     ├─ ProjectTechStack.tsx
│     ├─ ProjectStats.tsx
│     ├─ ProjectGallery.tsx    (horizontal scroll + images)
│     └─ ProjectCTA.tsx
├─ data/
│  └─ projects.ts              (All project data)
└─ public/
   └─ videos/
      ├─ uni-info-sa/
      │  ├─ feature-1.mp4
      │  ├─ feature-2.mp4
      │  └─ feature-3.mp4
      ├─ biki/
      └─ ...
```

**URL Structure**:
```
/projects/uni-info-sa
/projects/biki
/projects/safepay
/projects/seaclear
/projects/gridsmart
```

**Dynamic Routing**:
- Uses Next.js App Router `[slug]` pattern
- Fetches data from `projects.ts` based on slug
- 404 if slug not found

---

## Data Structure

**projects.ts Schema**:
```typescript
export interface Project {
  slug: string
  name: string
  tagline: string
  brandColor: string

  hero: {
    image: string
    background?: string
  }

  problem: {
    title: string
    description: string
    points: string[]
    image: string
  }

  solution: {
    title: string
    description: string
    highlights: string[]
  }

  features: {
    title: string
    description: string
    video: string
  }[]

  additionalFeatures: string[]

  techStack: {
    name: string
    icon: string
    category: 'Frontend' | 'Backend' | 'Infrastructure' | 'Tools'
  }[]

  impact: {
    value: number
    label: string
  }[]

  screenshots: string[]

  links: {
    appStore?: string
    playStore?: string
    github?: string
    demo?: string
    pdf?: string
  }
}

export const projects: Record<string, Project> = {
  'uni-info-sa': { /* ... */ },
  'biki': { /* ... */ },
  // ...
}
```

---

## Homepage Integration

**Update Required**:
Replace current project buttons' `console.log` with Next.js Link navigation:

```tsx
// Before:
<button onClick={() => console.log('Navigate to Uni Info SA')}>

// After:
<Link href="/projects/uni-info-sa">
  <button>
    {/* existing button content */}
  </button>
</Link>
```

**Changes in**: `src/app/page.tsx` lines 382, 413, 444, 475, 506

---

## Video Creation Workflow

### After Effects Setup
**Composition Settings**:
- Resolution: 1170 x 2532 pixels (iPhone 14 Pro)
- Frame Rate: 30fps or 60fps
- Duration: 10-15 seconds per feature
- Background: Transparent or app background

**Animation Approach**:
- Import app screenshots/UI elements
- Animate user interactions (taps, swipes, scrolls)
- Add smooth transitions between states
- Ensure first and last frames can loop seamlessly
- Optional: Add motion graphics overlays (arrows, highlights)

**Export Settings**:
- Format: H.264 (MP4)
- Quality: High
- Target Bitrate: 3-5 Mbps
- Audio: None

**Post-Processing**:
- Compress with ffmpeg if needed: `ffmpeg -i input.mp4 -crf 28 output.mp4`
- Target file size: 1-3 MB per video
- Test loop seamlessness

### Video Requirements Per Project
**3 videos per project showing**:
1. Primary feature (most important)
2. Secondary feature (key differentiator)
3. Tertiary feature (supporting functionality)

**Example - Uni Info SA**:
1. Smart program search/matching
2. University comparison tool
3. Requirements calculator

---

## Technical Stack

**Framework**: Next.js 14+ (App Router)

**Styling**:
- Tailwind CSS
- Custom CSS for scroll snap
- CSS transforms for 3D effects

**Animations**:
- Framer Motion (section animations)
- GSAP (optional, for complex scroll effects)
- Native CSS transitions

**Video Handling**:
- HTML5 `<video>` element
- Intersection Observer API for play/pause
- Native scroll APIs (no libraries)

**Images**:
- Next.js Image component (optimization)
- Lazy loading
- Device frames: Custom SVG components

**Performance**:
- Code splitting per route
- Lazy load videos below fold
- Preload first video only
- Image optimization
- Font optimization

---

## Responsive Design

### Desktop (1440px+)
- Full-width sections
- Large device frames
- Side-by-side layouts where applicable
- Maximum spacing and whitespace

### Tablet (768px - 1439px)
- Adjusted device frame sizes
- Stacked layouts
- Maintained horizontal scroll

### Mobile (< 768px)
- Full-screen sections maintained
- Smaller device frames
- Same horizontal scroll behavior
- Touch-optimized interactions
- Simplified navigation

---

## Accessibility

**Keyboard Navigation**:
- Tab through all interactive elements
- Arrow keys navigate horizontal scroll
- Space/Enter activate buttons

**Screen Readers**:
- Alt text for all images
- ARIA labels for carousel navigation
- Semantic HTML structure

**Motion**:
- Respect `prefers-reduced-motion`
- Provide static alternatives
- Allow pause/play control

**Contrast**:
- WCAG AA compliance
- Readable text on all backgrounds
- Focus indicators

---

## Performance Targets

**Metrics**:
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Optimizations**:
- Video lazy loading
- Image optimization
- Code splitting
- Font preloading
- Minimal JavaScript bundle
- Efficient animations (GPU-accelerated)

---

## Browser Support

**Target Browsers**:
- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓
- Mobile Safari (iOS 14+) ✓
- Chrome Mobile (Android 10+) ✓

**Fallbacks**:
- No JavaScript: Basic content visible
- Old browsers: Graceful degradation
- Video not supported: Show static image

---

## Development Phases

### Phase 1: Template Structure (Build First)
**Deliverables**:
- Dynamic routing setup
- All section components with placeholders
- Horizontal scroll mechanics
- Device frame component (SVG)
- Snap scrolling implementation
- "Play All" logic (with placeholder videos)
- Navigation header
- Responsive layouts

**Placeholder Content**:
- Lorem ipsum text
- Sample videos (generic animations)
- Stock images

### Phase 2: Video Creation (Parallel to Phase 1)
**User Task**:
- Create 3 feature videos in After Effects for Uni Info SA
- Export as MP4 (specifications above)
- Compress to target file size
- Test loop quality

### Phase 3: Content Integration
**Tasks**:
- Add real videos to template
- Write and add text content (problem, solution, features)
- Add real screenshots
- Add tech stack icons
- Configure links (App Store, GitHub, etc.)
- Replace placeholder images

### Phase 4: Polish & Optimization
**Tasks**:
- Fine-tune animations
- Optimize video loading
- Test on multiple devices
- Performance audit
- Accessibility audit
- Cross-browser testing

### Phase 5: Replication
**Tasks**:
- Create videos for remaining 4 projects
- Populate data for each project
- Ensure consistency across all pages
- Final QA

---

## Content Checklist Per Project

### Required Content:
- [ ] Project name
- [ ] One-line tagline
- [ ] Hero screenshot/mockup
- [ ] Problem statement (2-3 sentences)
- [ ] 3-4 problem bullet points
- [ ] Solution overview (2-3 sentences)
- [ ] 3-5 solution highlights
- [ ] **3 feature videos** (MP4, 10-15s each)
- [ ] 3 feature titles
- [ ] 3 feature descriptions (1-2 sentences)
- [ ] 5-7 additional text features
- [ ] Tech stack list (names + icons)
- [ ] 3-4 impact metrics (numbers + labels)
- [ ] 5-8 app screenshots
- [ ] Access links (App Store, GitHub, etc.)

### Optional Content:
- [ ] Background images
- [ ] Awards/achievements
- [ ] Testimonials
- [ ] Custom graphics/icons
- [ ] Demo video
- [ ] Case study PDF

---

## Animation Details

### Entrance Animations
**Timing**: Triggered on scroll into viewport

**Hero**:
- Background fade-in (0.5s)
- Device slide-up + fade (0.8s, delay 0.2s)
- Title slide-up + fade (0.6s, delay 0.4s)
- Tagline fade (0.4s, delay 0.6s)

**Sections**:
- Container fade-in + scale (0.6s)
- Content stagger (0.2s between elements)
- Images parallax effect

**Feature Carousel**:
- Cards slide in from sides (0.8s)
- Active card scale (1.05x)
- Video fade-in after load (0.3s)

**Tech Stack**:
- Icons stagger in (0.1s between)
- Scale + fade entrance (0.4s)

**Stats**:
- Number count-up (2s with easing)
- Cards stagger (0.15s between)

### Scroll Animations
**Parallax**:
- Background images move slower than foreground
- Subtle (0.3-0.5x scroll speed)

**Progressive Reveal**:
- Elements fade/slide as they enter viewport
- Exit animations optional (fade only)

### Micro-interactions
**Buttons**:
- Hover: scale(1.05) + brightness
- Click: scale(0.95) momentary

**Device Frames**:
- Continuous float (3s ease-in-out loop)
- Hover: slight tilt (optional)

**Play All Button**:
- Pulse animation when idle
- Smooth state transition (play ↔ pause)

---

## Color Theming System

Each project uses its brand color throughout:

**Applications**:
- Gradient overlays (10-20% opacity)
- Button hover states
- Link colors
- Active states in carousel
- Device frame accents (very subtle)
- Section dividers
- Icon highlights

**Implementation**:
```tsx
const theme = {
  primary: projectBrandColors[slug],
  gradient: `linear-gradient(135deg, ${primary}15, transparent)`,
  hover: `${primary}20`,
  text: primary,
}
```

---

## Success Metrics

**User Engagement**:
- Average time on project pages: > 2 minutes
- Scroll depth: > 80%
- Feature video views: > 70% of visitors
- "Play All" usage: > 30% of visitors

**Technical Performance**:
- Page load time: < 3s
- Video load time: < 2s
- No layout shift during scroll
- Smooth 60fps animations

**Conversion**:
- CTA click-through rate: > 15%
- Project link visits: tracked
- Contact form submissions: tracked (if added)

---

## Future Enhancements (Post-MVP)

**Potential Additions**:
- [ ] Project comparison view
- [ ] Filtering by tech stack
- [ ] Search functionality
- [ ] Comments/feedback system
- [ ] Related projects suggestions
- [ ] Social sharing
- [ ] Analytics dashboard
- [ ] A/B testing different layouts
- [ ] 3D device mockups with Three.js
- [ ] Interactive demos (embedded iframes)
- [ ] Testimonials section
- [ ] Press/media mentions

---

## Notes & Considerations

**Device Frame Decision**:
- Using straight-on view with CSS depth effects
- More flexible than pre-rendered 3D mockups
- Better video visibility
- Easier responsive implementation
- Can still add hover tilt if desired

**Video vs Screenshots**:
- 3 videos for main features (high impact)
- Static screenshots for gallery (easier to maintain)
- Balance between "wow factor" and practicality

**Content Strategy**:
- Start with Uni Info SA (has most content ready)
- Template other projects with placeholders
- Fill in progressively
- Consistency is key

**Performance Priority**:
- Videos are heavy - optimize aggressively
- Lazy load everything below fold
- Consider using poster images
- Test on slow connections

**Mobile First**:
- Horizontal scroll must work perfectly on touch
- No hover-dependent interactions
- Test on actual devices (not just browser DevTools)
- Consider reducing video quality on mobile

---

## Questions & Decisions Log

**Q1**: Device frame style?
**A**: Straight-on with CSS floating effect (not 3D angled)

**Q2**: Number of features?
**A**: 3 video features + additional text features

**Q3**: Play All behavior?
**A**: Auto-advance, stop at end (no loop)

**Q4**: Navigation style?
**A**: Dropdown selector + back button

**Q5**: Page transitions?
**A**: Instant (no animation between projects)

**Q6**: Mobile horizontal scroll?
**A**: Same as desktop (touch-friendly)

**Q7**: Content creation?
**A**: Build template first, add content progressively

**Q8**: Video creation tool?
**A**: Adobe After Effects (user has experience)

---

## Timeline Estimate

**Phase 1 - Template**: 3-4 hours
**Phase 2 - Videos (Uni Info SA)**: 4-6 hours
**Phase 3 - Integration**: 1-2 hours
**Phase 4 - Polish**: 2-3 hours
**Phase 5 - Replication**: 8-12 hours (4 remaining projects)

**Total**: ~20-27 hours

**Priority**: Complete Uni Info SA fully first, then replicate.

---

## Contact & Collaboration

**Version Control**:
- Git workflow: feature branches
- Commit messages: descriptive
- PR reviews before merge

**Testing**:
- Test on Chrome, Safari, Firefox
- Test on iOS Safari, Chrome Mobile
- Test video playback on all browsers
- Test scroll snap on touch devices

**Feedback Loop**:
- Review after Phase 1 (template)
- Review after Phase 3 (first complete project)
- Iterate based on feedback

---

**Last Updated**: 2025-01-16
**Status**: Ready for implementation
**Next Step**: Begin Phase 1 - Template Structure
