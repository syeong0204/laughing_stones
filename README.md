################################################################################

The Story Of Music
By: The Laughing Stones
Members: Enkhsanaa, Juliana Puskar, Samson Yeung, Tamara Delice, Ali Daneshmand

Project Goal: To tell the story of Music over the past 50 years. Who was popular? Who wasn't? What Genre was popular? What Genre wasn't?

Data Sources:

Sample Vizualization:

alt text

Process We Followed:

Data Discovery: A. We first downloaded all the the data we found from Kaggle and Data World related (all CSV formatted) B. We analyzed the data to see what Columns and data sets applied to our goals. We ultimately decided to limit our data to only that of the US, since using the available global data would have been too much data to parse (~3.02 GB) C. Since our existing Data Source did not include Genre as one of the Columns in their data- sets, we found additional "Album" information that included Album information per artist.
Data ETL Work A. We first loaded and then cleaned the data in python from both Data Sources (csv based data) into Python Data Frames * Since there were only 2 tables, the goal was to merge them into one veral table containing all relevant information B. Then we removed unnecessary data (unneeded columns) C. We eventually discovered that the overlapping columns from both tables (pre-merging) were stored as different data types. So additional data massaging was required to match data- types between tables in order to better facilitate the "merging" process. D. Once both tables (one from each data source) was cleaned, and masaged properly, we were able to merge the data into one large table. E. Finalized data in the final data frame was loaded into a PostGREs Data Base in preparation for the Flask API work.
Flask API:

Data from the PostGRES Data Base was loaded into a standard FLASK API in Python to serve a

################################################################################
