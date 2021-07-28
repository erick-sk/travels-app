import express from 'express';
import {
    pageAboutus,
    pageHome,
    pageTravels,
    pageTestimonials,
    pageDetailTravel,
} from '../controllers/pagesController.js';

import { saveTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

// Define routes
router.get('/', pageHome);

router.get('/aboutus', pageAboutus);

router.get('/travels', pageTravels);
router.get('/travels/:slug', pageDetailTravel);

router.get('/testimonials', pageTestimonials);
router.post('/testimonials', saveTestimonial);

export default router;
