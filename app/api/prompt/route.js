import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt';

/** Add this to help nextJs to not cache this route */
export const dynamic = 'force-dynamic';

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts),{ status: 200 });

    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all prompts",{ status: 500});
    }
}