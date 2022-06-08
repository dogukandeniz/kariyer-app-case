import client from '../_helpers/client';

export const userService = {
    getAll,
    getUserByTerm
}

async function getAll(args){
    const result = await client.get("/",{
        params: {
            ...args
        }
    });
    return result;
}
async function getUserByTerm(args){
    const result = await client.get("/find",{
        params: {
        ...args
        }
    });
    return result;
}