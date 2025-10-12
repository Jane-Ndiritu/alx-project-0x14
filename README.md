# alx-project-0x14
CineSeek is a modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS. The application allows users to browse movies from the MoviesDatabase API, view movie details, and search for films by year or genre. The project focuses on creating a responsive, well-structured web application with proper API integration and TypeScript typing.
## API Overview
This API provides a comprehensive and continuously updated database of movies, television shows, and actors. It includes rich metadata such as YouTube trailer URLs, award histories, full biographies, and additional relevant information.With coverage of over 9 million titles (including movies, series, and episodes) and 11 million actors, crew, and cast members, the API delivers reliable and detailed data to support a wide range of entertainment-related applications.
Support the developer: https://www.buymeacoffee.com/SAdrian13
## Available Endpoints
#### 1.Titles
Query parameters and model are explain below, in 'Description Of Optionals Query Parameters' and 'Description Of The Information (Models)'
###### a.Titles - Multiple:
i)path: /titles
ii)description: returns array of titles according to filters / sorting query parameters provided
iii)query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
iv)model: title
###### b.Titles - By List of Id's:
i)path: /x/titles-by-ids
ii)description: returns array of titles according to array of id's provided
iii)query parameters: - info - list ( unique query parameter that sets the collection you want to query) - options available in Utils - Titles Lists - idsList ( the list of id's, must be an array of strings)
iv)model: title
###### c.Title
i)path: /titles/{id}
ii)path parameter (required) : id -> imdb id of title
iii)description: returns title acording to filters / sorting query parameters provided
query parameters: info
iv)model: title
###### d.Title Rating
i_path: /titles/{id}/ratings
ii)path parameter (required) : id -> imdb id of title
iii)description: returns title rating and votes number
iv)query parameters: -
v)model: rating
###### e.Seasons and Episodes
i)path: /titles/series/{id}
ii)path parameter (required) : id -> imdb id of series
iii)description: returns array of episodes only with episode id, episode number and season number in ascending order
iv)query parameters: -
v)model: light episode
###### f.Seasons Number
i)path: /titles/seasons/{id}
ii)path parameter (required) : id -> imdb id of series
iii)description: returns number of seasons for the series (integer)
iv)query parameters: -
###### g.Episodes Id`s By Series Id and Season
i)path: /titles/series/{id}/{season}
ii)path parameter (required) : id -> imdb id of series, season -> season number
iii)description: returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
iv)query parameters: -
v)model: light episode
###### h.Episode
i)path: /titles/episode/{id}
ii)path parameter (required) : id -> imdb id of episode
iii)description: returns episode according to filters / sorting query parameters provided
iv)query parameters: info
v)model: title
###### i.Upcoming Titles
i)path: /titles/x/upcoming
ii)description: returns array of upcoming titles according to filters / sorting query parameters provided
iii)query parameters: multiple
iv)model: title
v)Search
###### j.Titles by Keyword
i)path: /titles/search/keyword/{keyword}
ii)path parameter (required) : keyword
iii)description: returns array of titles according to filters / sorting query parameters provided and the keyword provided in path
iv)query parameters: multiple
v)model: title
###### k.Titles by Title
i)path: /titles/search/title/{title}
ii)path parameter (required) : title -> a title or part of a title
iii)description: returns array of titles according to filters / sorting query parameters provided and the title provided in path
iv)query parameters: *multiple, uniq query parameter exact that sets the looku to be exact default : false
v)model: title
###### l.Titles by Aka's
i)path: /titles/search/akas/{aka}
ii)path parameter (required) :aka -> a aka of a title ( exact only and case sensitive )
iii)description: returns array of titles according to filters / sorting query parameters provided and the aka provided in path, work only for exact matches
iv)query parameters: multiple
v)model: title
vi)Actors
###### m.Actors
i)path: /actors
ii)description: returns array of actors according to filters provided
iii)query parameters: limit, page
iv)model: actor
###### n.Actor By Id
i)path: /actors/{id}
ii)path parameter (required) : imdb id of actor
iii)description: returns actor details
iv)model: actor
###### o.Utils
i)Title Type
ii)path: /title/utils/titleType
iii)description: returs array of title types
###### p.Genres
i)path: /title/utils/titleType
ii)description: returs array of genres
###### q.Titles Lists
i)path: /title/utils/lists
ii)description: returns array of lists (for 'list' query parameter)
## Request and Response Format
info STRING
default: mini_ info
description : option to get specific informations
there is some predefinded options (exemple below) :
base_info
mini_info
image
creators_directors_writers
revenue_budget
extendedCast
rating
awards
IMPORTANT : in the info query parameter can be used, beside of predefined options above, ANY key of the title object (ex object in 'Description of the information' no.4 )
limit NUMBER
default: 10
description: number of objects per page (max 50)
page NUMBER
default: 1
titleType STRING
default : -
description : options for this field from /title/utils/titleTypes ( Utils -> TitleTypes)
startYear NUMBER
default : -
description: filter by year with range, start range in this field
endYear NUMBER
default : -
description: filter by year with range, end range in this field
year NUMBER
default : -
description: filter by year, returns only titles with this year as release year
description**: can`t be used with startYear / endYear
genre STRING
default : -
description: filter by genre of title, case sensitive - has to be capitalize, options for this field from /title/utils/genres ( Utils -> Genres)
sort STRING
default : -
description: sorts returned array by selected predefined options
there is 2 predefined options work in progress:
year.incr
description: sorts result by year ascending
year.decr
description: sorts result by year ascending
exact STRING
default : false
description: set the lookup to match the exact text, available only in Search - Titles by Title
list STRING
default : titles
description: predefined lists of titles (limit of 50 entries on one request).
every title in every list other that titles have an additional field position to identify the position of the title in the selected list (top)
options available in Utils - Titles Lists
there is 9 predefined options :
most_pop_movies
description: Top 10.000 most popular movies, according to imdb ranking
most_pop_series
description: Top 10.000 most popular series, according to imdb ranking
top_boxoffice_200
description: Top 200 all time box office movies, according to boxofficemojo
top_boxoffice_last_weekend_10
description: Top 10 box office of the last weekend, according to imdb ranking
top_rated_250
description: Top 250 movies by rating, according to imdb ranking
top_rated_english_250
description: Top 250 english movies by rating, according to imdb ranking
top_rated_lowest_100
description: Top 100 lowest rated movies, according to imdb ranking
top_rated_series_250
description: Top 250 series by rating, according to imdb ranking
titles
description: The entire collection with over 9.000.000 movies, series and episodes default
### Exemple of predefinded info options:
base_info exemple

titleText: ... , id: ... , primaryImage: ... , titleType: ... , releaseDate: ... , genres: ... , runtime: ... , plot: ... , meterRanking: ... , ratingsSummary: ... , episodes: ... , series: ...

mini_info exemple

titleText: ... , id: ... , primaryImage: ... , titleType: ... , releaseDate: ...

image exemple

id: ... , primaryImage: ...

creators_directors_writers exemple

id: ... , creators: ... , directors: ... , writers: ...

revenue_budget exemple

id: ... ,
productionBudget: ... , lifetimeGross: ... , openingWeekendGross: ... , worldwideGross: ...

extendedCast exemple

id: ... , cast: ...

rating exemple

id: ... , ratingsSummary: ...

awards exemple

id: ... , wins: ... , nominations: ... , prestigiousAwardSummary: ...
## Authentication
i) (model) rating object contains 3 keys:

exemple of ratings object:

tconst:"tt0000003" averageRating:6.5 numVotes:1631

ii) (model) light episode contains 4 keys:

exemple of light episode object:

tconst:"tt0020666" parentTconst:"tt15180956" seasonNumber:1 episodeNumber:2

iii) (model) actor contains 6 keys:

exemple of actor object:

nconst:"nm0000001" primaryName:"Fred Astaire" birthYear:1899 deathYear:1987 primaryProfession:"soundtrack,actor,miscellaneous" knownForTitles:"tt0050419,tt0053137,tt0072308,tt0031983"

iv) (model) title object contains around 58 keys, this can be obtained thru INFO query parameter (described above)
## Usage Limits and Best Practices
####Usage Limits
a.Rate Limits:
The number of API requests allowed per minute or hour depends on your subscription plan (Free, Basic, Pro, or Ultra).
Exceeding this limit may result in HTTP 429 Too Many Requests responses.
b.Daily Quota:
Each plan includes a maximum number of requests per day. You can monitor your remaining quota in your RapidAPI dashboard.
c.Concurrent Requests:
There may be a limit on how many requests can be made simultaneously. Making too many concurrent calls can trigger throttling.
d.Payload / Response Size:
Some endpoints limit the number of results or total response size. Use pagination parameters like page or limit to manage large datasets.

⚠️ Note: Official rate limit and quota values may vary by plan. Check the Usage tab on your RapidAPI dashboard
 for your exact limits.
#### Best Practices
1.Cache Responses:
Store frequently accessed data (e.g., movie details) locally to reduce repeated API calls and improve performance.
2.Use Pagination Efficiently:
Retrieve only the required number of results using pagination parameters instead of fetching all data at once.
3.Implement Retry Logic:
When receiving rate-limit or timeout errors, use exponential backoff (wait a bit, then retry) instead of sending repeated requests.
4.Batch Requests When Possible:
If the API supports it, request multiple items in one call rather than making many single-item requests.
5.Monitor Your Usage:
Keep an eye on your RapidAPI usage dashboard to ensure you’re within your plan’s limits.
6.Optimize Queries:
Use filters and query parameters to narrow your results and minimize unnecessary data transfer.
7.Handle Errors Gracefully:
Build error handling for scenarios like rate-limit responses, timeouts, or unavailable endpoints.
8.Use a Request Queue or Rate Limiter:
Manage burst traffic to prevent hitting rate caps by spacing out requests.
9.Respect Terms of Service:
Avoid excessive scraping or automated bulk requests outside acceptable use; contact the provider for higher-volume needs.
10.Degrade Gracefully:
If the API limit is reached, display cached or partial data instead of halting your app’s functionality.
