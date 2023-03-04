<template>
  <div class="nav-drawer h-screen border-r">
    <!-- list -->
    <div class="list list-hover flex-grow">
      <div class="px-2 py-1">
        <div class="nav-drawer-title">
          Application
        </div>
        <div class="nav-drawer-subtitle">
          SubText
        </div>
      </div>
      <div class="border-b my-1 -mx-2" />
      <div class="list-header text-xs py-1 uppercase pl-3">
        Main Menu
      </div>
      <!-- list item -->
      <a href="#" class="list-group-item gap-4">
        <div class="list-group-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div class="list-group-item-content">
          <div class="list-group-item-subtitle">Dashboard</div>
        </div>
      </a>
      <!-- ./list item -->
      <!-- list item -->
      <a
        class="list-group-item gap-4"
        data-bs-toggle="collapse"
        href="#collapseTeam"
        role="button"
        aria-expanded="false"
        aria-controls="collapseTeam"
      >
        <div class="list-group-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div class="list-group-item-content">
          <div class="list-group-item-subtitle">Team</div>
        </div>
        <div class="list-group-item-action text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </a>
      <!-- ./list item -->
      <!-- child list -->
      <div id="collapseTeam" class="list list-child collapse">
        <!-- list item -->
        <a href="#" class="list-group-item gap-4">
          <div class="list-group-item-icon">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg> -->
          </div>
          <div class="list-group-item-content">
            <div class="list-group-item-subtitle">Add New Team</div>
          </div>
        </a>
        <!-- ./list item -->
        <!-- list item -->
        <a href="#" class="list-group-item gap-4">
          <div class="list-group-item-icon">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg> -->
          </div>
          <div class="list-group-item-content">
            <div class="list-group-item-subtitle">Team Group</div>
          </div>
        </a>
        <!-- ./list item -->
      </div>
      <!-- ./child list -->
      <!-- list item -->
      <a
        data-bs-toggle="collapse"
        href="#collapseProjects"
        role="button"
        aria-expanded="false"
        aria-controls="collapseProjects"
        class="list-group-item gap-4"
      >
        <div class="list-group-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
        </div>
        <div class="list-group-item-content">
          <div class="list-group-item-subtitle">Projects</div>
        </div>
        <div class="list-group-item-action text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </a>
      <!-- ./list item -->
      <!-- child list -->
      <div id="collapseProjects" class="list list-child collapse">
        <!-- list item -->
        <a href="#" class="list-group-item gap-4">
          <div class="list-group-item-icon">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg> -->
          </div>
          <div class="list-group-item-content">
            <div class="list-group-item-subtitle">Add New Project</div>
          </div>
        </a>
        <!-- ./list item -->
        <!-- list item -->
        <a href="#" class="list-group-item gap-4">
          <div class="list-group-item-icon">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg> -->
          </div>
          <div class="list-group-item-content">
            <div class="list-group-item-subtitle">Favorite</div>
          </div>
        </a>
        <!-- ./list item -->
      </div>
      <!-- ./child list -->
      <!-- list item -->
      <a href="#" class="list-group-item gap-4">
        <div class="list-group-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div class="list-group-item-content">
          <div class="list-group-item-subtitle">Calendar</div>
        </div>
      </a>
      <!-- ./list item -->
      <!-- list item -->
      <a href="#" class="list-group-item gap-4">
        <div class="list-group-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div class="list-group-item-content">
          <div class="list-group-item-subtitle">Documents</div>
        </div>
      </a>
      <!-- ./list item -->
      <!-- list item -->
      <a href="#" class="list-group-item gap-4">
        <div class="list-group-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <div class="list-group-item-content">
          <div class="list-group-item-subtitle">Reports</div>
        </div>
      </a>
      <!-- ./list item -->
    </div>
    <!-- ./list -->
    <div class="nav-drawer-append">
      <button class="btn btn-error btn-block">
        Logout
      </button>
    </div>
  </div>
</template>
