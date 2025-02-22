import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import minify from 'astro-min';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        icon(),
    ],
    prefetch: true,
    site: 'https://www.graf-it.co.uk',
});
