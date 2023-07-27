<template>
	<h1>Authorization Request</h1>
	<p><strong>{{ $page.props.client.name }}</strong> is requesting permission to access your account.</p>

	<template v-if="$page.props.scopes.length > 0">
		<p><strong>This application will be able to:</strong></p>

		<ul>
			<li v-for="scope in $page.props.scopes" :key="scope">{{ scope.description }}</li>
		</ul>
	</template>

	<!-- Authorize Button -->
	<form method="post" :action="$page.props.route.approve">
		<input type="hidden" name="_token" :value="$page.props.csrfToken" />
		<input type="hidden" name="state" :value="$page.props.request.state" />
		<input type="hidden" name="client_id" :value="$page.props.client.id" />
		<input type="hidden" name="auth_token" :value="$page.props.authToken" />
		<button type="submit">Authorize</button>
	</form>

	<!-- Cancel Button -->
	<form method="post" :action="$page.props.route.deny">
		<input type="hidden" name="_method" value="DELETE" />
		<input type="hidden" name="_token" :value="$page.props.csrfToken" />
		<input type="hidden" name="state" :value="$page.props.request.state" />
		<input type="hidden" name="client_id" :value="$page.props.client.id" />
		<input type="hidden" name="auth_token" :value="$page.props.authToken" />
		<button type="submit">Cancel</button>
	</form>
</template>