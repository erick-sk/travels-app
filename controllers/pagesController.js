import { Travel } from '../models/Travel.js';
import { Testimonial } from '../models/Testimonials.js';

const pageHome = async (req, res) => {
    // Consulting 3 travels from model Travel
    const promiseDB = [];

    promiseDB.push(Travel.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        const results = await Promise.all(promiseDB);

        res.render('home', {
            page: 'Home',
            clase: 'home',
            travels: results[0],
            testimonials: results[1],
        });
    } catch (error) {
        console.log(error);
    }
};

const pageAboutus = (req, res) => {
    res.render('aboutus', {
        page: 'Aboutus',
    });
};

const pageTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.findAll();
        res.render('testimonials', {
            page: 'Testimonials',
            testimonials,
        });
    } catch (error) {
        console.log(error);
    }
};

const pageTravels = async (req, res) => {
    // Consulting DB
    const travels = await Travel.findAll();

    res.render('travels', {
        page: 'Next Travels',
        travels,
    });
};

// Show a travel through slug
const pageDetailTravel = async (req, res) => {
    const { slug } = req.params;

    try {
        const result = await Travel.findOne({ where: { slug } });

        res.render('travel', {
            page: 'Information Travel',
            result,
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    pageTravels,
    pageHome,
    pageAboutus,
    pageTestimonials,
    pageDetailTravel,
};
