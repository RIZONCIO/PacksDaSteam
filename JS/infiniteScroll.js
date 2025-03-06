function handleScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !isLoading
    ) {
      if (currentPage < totalPages) {
        setTimeout(() => {
          fetchBundles(currentPage + 1);
        }, 500); // delay de 500ms
      }
    }
  }
  
  fetchBundles();
  
  window.addEventListener("scroll", handleScroll);
  