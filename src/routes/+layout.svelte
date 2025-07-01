<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<style>
    section {
         @media (max-width: 768px) {
              margin: 0 1rem 0 1rem;
         }
         @media (min-width: 769px) {
              margin: 0 20% 0 20%;
         }

         flex: 1;
         padding: 1.5rem 1.5rem 0.5rem;

         backdrop-filter: blur(2px);
         background: rgba(0, 0, 0, 0.07 );

         border-left: 1px var(--card-highlight-color) solid;
         border-right: 1px var(--card-highlight-color) solid;
    }
</style>

<Header/>

<section>
     <slot/>
</section>

<Footer/>