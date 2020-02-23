<script>
  export let user;
  const { name, email, company } = user;
</script>

<h1>{name}</h1>
<h3>{email}</h3>
<p>{company.catchPhrase}</p>
