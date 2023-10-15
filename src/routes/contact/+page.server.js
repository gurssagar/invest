import { error, redirect } from '@sveltejs/kit';

export const actions = {
    contact: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        try {

            await locals.pb.collection('Contact').create({...body });

        } catch (err) {
            console.log("I am an alert box!");
        }

        throw redirect(303, '/About');
    }
};