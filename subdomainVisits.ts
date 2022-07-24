

/**
 * A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.

For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.
 */

function subdomainVisits(cpdomains: string[]): string[] {
    let map = new Map<string, number>();
    for (let cpdomain of cpdomains) {
        let [count, domain] = cpdomain.split(' ');
        let [, ...subdomains] = domain.split('.');
        for (let subdomain of subdomains) {
            map.set(subdomain, (map.get(subdomain) || 0) + parseInt(count));
        }
    }
    return Array.from(map.entries()).map(([subdomain, count]) => `${count} ${subdomain}`);
}

// so close! but there's a bug where it doesnt count the initial entry domain "discuss.leetcode.com"