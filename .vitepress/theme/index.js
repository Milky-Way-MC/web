import DefaultTheme from 'vitepress/theme-without-fonts'
import './theme.css'
import './fonts.css'

import FeatureCard from './components/FeatureCard.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('FeatureCard', FeatureCard)
    }
}