export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  console.log('auth Middleware')
  console.log(user.value);
  if (!user.value) {
    return navigateTo("/auth");
  }
});
