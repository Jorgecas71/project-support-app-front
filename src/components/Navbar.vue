<template>
    <nav id="nav" class="navbar bg-dark text-light navbar-expand-lg navbar-dark sticky-top">
        <div class="container-fluid justify-content-end">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-left" id="navbarNav">
                <ul class="navbar-nav">
                    <li>
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li>
                        <RouterLink to="/request-list" class="nav-link">All requests</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/new-request" class="nav-link">New Request</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/request/:id" class="nav-link">Edit Request</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.nav-link {
  text-align: center;
  color: #f6e9e9;
}
</style>