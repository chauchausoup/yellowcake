---
template: SinglePost
title: "Data Preprocessing "
status: Published
date: 2021-01-06
featuredImage: https://ucarecdn.com/1bc9cd42-328e-49f0-aab2-95b79c594e50/
excerpt: preprocessing
categories:
  - category: Academics
---
Low-quality data will lead to low-quality mining results.

There are a number of data preprocessing techniques. **Data cleaning** can be applied to
remove noise and correct inconsistencies in the data. **Data integration** merges data from
multiple sources into a coherent data store, such as a data warehouse. **Data transformations**, such as normalization, may be applied. For example, normalization may improve
the accuracy and efficiency of mining algorithms involving distance measurements. **Data reduction** can reduce the data size by aggregating, eliminating redundant features, or clus-
tering, for instance. These techniques are not mutually exclusive; they may work together.

For example, data cleaning can involve transformations to correct wrong data, such as
by transforming all entries for a date field to a common format. Data processing tech-
niques, when applied before mining, can substantially improve the overall quality of the
patterns mined and/or the time required for the actual mining.

**Data cleaning** routines work to “clean” the data by filling in missing values, smooth-
ing noisy data, identifying or removing outliers, and resolving inconsistencies. If users
believe the data are dirty, they are unlikely to trust the results of any data mining that
has been applied to it.

Suppose that you would like to include data from multiple sources in your analysis. This would involve integrating multiple databases, data cubes, or files, that is, data integration. Typically, data cleaning and data integration are performed
as a preprocessing step when preparing the data for a data warehouse. Additional data
cleaning can be performed to detect and remove redundancies that may have resulted
from data integration.You soon realize
that data transformation operations, such as normalization and aggregation, are addi-
tional data preprocessing procedures that would contribute toward the success of the
mining process. 

Data reduction obtains a reduced representation of the data set that is much smaller
in volume, yet produces the same (or almost the same) analytical results. There are a
number of strategies for data reduction. These include data aggregation (e.g., building a
data cube), attribute subset selection (e.g., removing irrelevant attributes through correla-
tion analysis), dimensionality reduction (e.g., using encoding schemes such as minimum
length encoding or wavelets), and numerosity reduction (e.g., “replacing” the data by
alternative, smaller representations such as clusters or parametric models). 


## Descriptive Data Summarization

For data preprocessing to be successful, it is essential to have an overall picture of your
data. Descriptive data summarization techniques can be used to identify the typical prop-
erties of your data and highlight which data values should be treated as noise or outliers.
Thus, we first introduce the basic concepts of descriptive data summarization before get-
ting into the concrete workings of data preprocessing techniques.


### Central Tendency

1. Distributive Measure : Weighted mean , weighted average, median etc

2. Holistic Measure : Mean, median, mode etc.

### Measuring the dispersion

- Range
- Quartile
- Outliers
- Dispersion
- Variance 
- Standard Deviation

### Graphical 

- Histograms
- Frequency Histograms
- Bar Chart
- Quantile Plot
- Q-q Plot
- Scatter Plot

## Data Cleaning

Real-world data tend to be incomplete, noisy, and inconsistent. Data cleaning (or data cleansing) routines attempt to fill in missing values, smooth out noise while identifying outliers, and correct inconsistencies in the data. 

- Missing Values
- Ignore the tuples
- Fill the missing values manually
- Use of a global constant
- Use the attribute mean to fill up the missing value
- Use a most probable value

### Noisy Data

1. Binning: Binning methods smooth a sorted data value by consulting its “neighborhood,” that is, the values around it. The sorted values are distributed into a number of “buckets,” or bins.

- By bin means
- By bin medians
- By bin boundaries

2. Regression: Data can be smoothed by fitting the data to a function, such as with regression.

3. Clustering:Outliers may be detected by clustering, where similar values are organized into groups, or “clusters.” Intuitively, values that fall outside of the set of clusters may be considered outliers.
Data Cleaning as a process : Such knowledge or “data about data” is referred to as metadata. Field overloading is another source of errors that typically results when developers squeeze new attribute definitions into unused (bit) portions of already defined attributes (e.g., using an unused bit of an attribute whose value range uses only, say, 31 out of 32 bits). 

	There are a number of different commercial tools that can aid in the step of discrepancy
detection. Data scrubbing tools use simple domain knowledge (e.g., knowledge of postal
addresses, and spell-checking) to detect errors and make corrections in the data. These
tools rely on parsing and fuzzy matching techniques when cleaning data from multiple
sources. Data auditing tools find discrepancies by analyzing the data to discover rules
and relationships, and detecting data that violate such conditions. They are variants of
data mining tools. For example, they may employ statistical analysis to find correlations,
or clustering to identify outliers. They may also use the descriptive data summaries.


## Data Integration and Transformation
Data mining often requires data integration—the merging of data from multiple data
stores. The data may also need to be transformed into forms appropriate for mining.

1. Data Integration

It is likely that your data analysis task will involve data integration, which combines data
from multiple sources into a coherent data store, as in data warehousing. These sources
may include multiple databases, data cubes, or flat files.

How can equivalent real-world entities from multiple
data sources be matched up? This is referred to as the entity identification problem.

Redundancy is another important issue. An attribute (such as annual revenue, for
instance) may be redundant if it can be “derived” from another attribute or set of
attributes. Inconsistencies in attribute or dimension naming can also cause redundan-
cies in the resulting data set.


Some redundancies can be detected by correlation analysis. Given two attributes, such
analysis can measure how strongly one attribute implies the other, based on the available
data. 

2. Data Transformation

In data transformation, the data are transformed or consolidated into forms appropriate
for mining. Data transformation can involve the following:
Smoothing, which works to remove noise from the data. Such techniques include
binning, regression, and clustering.
Aggregation, where summary or aggregation operations are applied to the data. For
example, the daily sales data may be aggregated so as to compute monthly and annual
total amounts. This step is typically used in constructing a data cube for analysis of
the data at multiple granularities.
Generalization of the data, where low-level or “primitive” (raw) data are replaced by
higher-level concepts through the use of concept hierarchies. For example, categorical attributes, like street, can be generalized to higher-level concepts, like city or country.
Similarly, values for numerical attributes, like age, may be mapped to higher-level
concepts, like youth, middle-aged, and senior.
Normalization, where the attribute data are scaled so as to fall within a small specified
range, such as −1.0 to 1.0, or 0.0 to 1.0.
Attribute construction (or feature construction), where new attributes are constructed
and added from the given set of attributes to help the mining process.

## Data Reduction
Imagine that you have selected data from the data warehouse for analysis.
The data set will likely be huge! Complex data analysis and mining on huge amounts of
data can take a long time, making such analysis impractical or infeasible.

Data reduction techniques can be applied to obtain a reduced representation of the
data set that is much smaller in volume, yet closely maintains the integrity of the original
data. 

1. Data Cube aggregation

2. Attribute Subset Selection : The goal of attribute subset selection is to
find a minimum set of attributes such that the resulting probability distribution of
the data classes is as close as possible to the original distribution obtained using all attributes.

- Forward Selection
- Backward Selection
- Merged

3. Decision Tree

4. Dimensionality Reduction: In dimensionality reduction, data encoding or transformations are applied so as to obtain a reduced or “compressed” representation of the original data. 

- Wavelet Transform
- Principal Component Analyst

- Numerosity Reduction :“Can we reduce the data volume by choosing alternative, ‘smaller’ forms of data representation?” Techniques of numerosity reduction can indeed be applied for this purpose.
These techniques may be parametric or nonparametric. For parametric methods, a
model is used to estimate the data, so that typically only the data parameters need to
be stored, instead of the actual data. (Outliers may also be stored.) Log-linear models,
which estimate discrete multidimensional probability distributions, are an example. Nonparametric methods for storing reduced representations of the data include histograms, clustering, and sampling.




### Reference:

> Data Mining: Concepts and Techniques (The Morgan Kaufmann Series in Data Management Systems) 3rd Edition






