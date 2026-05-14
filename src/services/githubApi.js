const GITHUB_API_BASE = "https://api.github.com";

const handleResponse = async (response, errorMsg) => {
	if (!response.ok) {
		if (response.status === 404 && errorMsg.includes("User"))
			throw new Error("user not found!");
		throw new Error(errorMsg);
	}
	return await response.json();
};

export const fetchUserProfile = async (username) => {
	const response = await fetch(`${GITHUB_API_BASE}/users/${username}`,{
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		});
	return handleResponse(response, "Failed to fetch user profile!");
};

export const fetchUserRepos = async (username, page = 1, perPage = 30) => {
	const response = await fetch(
		`${GITHUB_API_BASE}/users/${username}/repos?page=${page}&per_page=${perPage}&sort=updated`, {
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		}
	);
	return handleResponse(response, "Failed to fetch repositories!");
};

export const searchRepositories = async (
	query,
	page = 1,
	perPage = 30,
	sort = "starts",
	order = "desc",
) => {
	const params = new URLSearchParams({
		q: query,
		page: page.toString(),
		perPage: perPage.toString(),
		sort,
		order,
	});
	const response = await fetch(
		`${GITHUB_API_BASE}/search/repositories?${params.toString()}`,{
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		}
	);
	return handleResponse(response, "Failed to search repositories");
};

export const fetchRepoDetails = async (owner, repo) => {
	const response = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}`, {
		method: "GET",
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
	});
	return handleResponse(response, "Failed to fetch repository details!");
};

export const fetchRepoLanguages = async (owner, repo) => {
	const response = await fetch(
		`${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`,
		{
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		}
	);

	return handleResponse(response, "Failed to fetch repository languages!");
};

export const fetchRepoActivity = async (owner) => {
	const response = await fetch(
		`${GITHUB_API_BASE}/users/${owner}/events`,{
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		}
	);

	return handleResponse(response, "Failed to fetch repository activity!");
};

export const fetchFollowers = async (owner) => {
	const response = await fetch(
		`${GITHUB_API_BASE}/users/${owner}/followers`,{
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		}
	);

	return handleResponse(response, "Failed to fetch followers!");
};

export const fetchFollowing = async (owner) => {
	const response = await fetch(
		`${GITHUB_API_BASE}/users/${owner}/following`,{
			method: "GET",
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		}
	);

	return handleResponse(response, "Failed to fetch following!");
};