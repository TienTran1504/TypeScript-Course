// localhost:3000/api/users
export async function GET(req) {

    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ]
    return new Response(JSON.stringify(users));
}