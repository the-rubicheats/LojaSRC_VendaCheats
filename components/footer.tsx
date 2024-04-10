const Footer = () => {
  return (
    <footer className="bg-black border-t mt-auto py-4">
      <div className="container mx-auto">
        <p className="text-center text-xs text-white">
          &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NOME_LOJA}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};


export default Footer;
