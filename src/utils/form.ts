export const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  
  // Here you would typically send this to your backend
  console.log('Subscription email:', email);
  form.reset();
};