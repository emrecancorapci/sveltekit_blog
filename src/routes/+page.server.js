
export async function load() {
    const featuredPostsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const featuredPosts = await featuredPostsResponse.json();
    
    const data = 
    {
        'featuredPosts' : featuredPosts.slice(0,5)
    }
    return data;
}