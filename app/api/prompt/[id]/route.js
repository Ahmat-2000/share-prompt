import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt';

// GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');

        if (!prompt) {
            return new Response("Prompt not found",{ status: 404 });
        } else {
            return new Response(JSON.stringify(prompt),{ status: 200 });
        }

    } catch (error) {
        return new Response("Failed to fetch all prompts",{ status: 500});
    }
}
// PATCH (update)
export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) {
            return new Response("Prompt not found",{ status: 404 });
        } else {
            existingPrompt.prompt = prompt;
            existingPrompt.tag = tag;

            await existingPrompt.save();

            return new Response(JSON.stringify(existingPrompt), { status: 200 });
        }

    } catch (error) {
        return new Response("Failed to update the prompt",{ status: 500});
    }
}
// DELETE (delete)
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id);
        if (prompt) {
        await prompt.deleteOne();
            return new Response("Prompt deleted successfully", { status: 200 });
        } else {
            return new Response("Prompt not found", { status: 404 });
        }
    } catch (error) {
        console.log(error);
        return new Response("Failed to delete the prompt",{ status: 500});
    }
}