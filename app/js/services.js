/// <reference path="~/scripts/_background-references.js" />
"use strict";

var services = {
	node: {
		displayName: "Node.js",
		versions: function () {
			return $.ajax('http://nodejs.org/docs/')
				.then(function (source) {
					return $(source)
							.find('a')
							.map(function () {
								var v = this.href.replace(/\/$/, '');
								return { name: v, version: v };
							})
							.filter(function () { return semver.valid(ver); })
							.get()
							.sort()
							.unshift({ name: "Latest", version: null });
				});
		},

	}
};