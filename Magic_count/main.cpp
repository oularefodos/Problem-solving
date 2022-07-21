#include <iostream>
#include <ostream>
#include <string>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
typedef long long ll;
typedef vector <ll> vll;


vll comb;
vll take(1030, 0);

void get(vll &tab, ll n, ll k) {
    ll sz = 1 << k;
    for (ll i = 1; i < sz; i++)
    {
        ll p = 1;
        ll t = 0;
        for (ll bit = 0; bit < tab.size(); bit++) {
            if ((i >> bit) & 1) {
                p *= tab[bit];
                t++;
            }
        }
        comb.push_back(i);
        take[i] = n/p;
    }
}

int main()
{
    ll n;
    ll k;
    cin >> n >> k; cin.ignore();
    vector <ll> tab(k);
    for (ll i = 0; i < k; i++) {
        cin >> tab[i];
    }
   
    get(tab, n, k);
    for (ll i = comb.size() - 1;  i >= 1; i--)
    {
        for (ll y = i - 1; y >= 0 ; y--)
        {
            if ((comb[i] & comb[y]) == comb[y])
                take[comb[y]] -= take[comb[i]];
        }
    }
    ll rep = 0;
    for (ll i = 0; i < take.size(); i++)
        rep += take[i];
    std::cout << rep << endl;
}