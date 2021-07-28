import { Testimonial } from '../models/Testimonials.js';

const saveTestimonial = async (req, res) => {
    // Validate
    const { name, email, message } = req.body;

    const errors = [];

    if (name.trim() === '') {
        errors.push({ message: 'Name is blink' });
    }

    if (email.trim() === '') {
        errors.push({ message: 'Email is blink' });
    }

    if (message.trim() === '') {
        errors.push({ message: 'Message is blink' });
    }

    if (errors.length > 0) {
        // Consulting testimonials exists
        const testimonials = await Testimonial.findAll();

        // Show view
        res.render('testimonials', {
            page: 'Testimonials',
            errors,
            name,
            email,
            message,
            testimonials,
        });
    } else {
        // Storage in DB
        try {
            await Testimonial.create({
                name,
                email,
                message,
            });

            res.redirect('/testimonials');
        } catch (error) {
            console.log(error);
        }
    }
};

export { saveTestimonial };
