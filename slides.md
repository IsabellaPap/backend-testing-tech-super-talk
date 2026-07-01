---
theme: ./
title: "snapAddy Slidev Theme Template"
info: |
  ## snapAddy Corporate Slidev Theme
  A clean baseline presentation using the custom snapAddy theme design system.
class: text-center
transition: slide-left
mdc: true
---

# Backend Testing Tech Super-Talk

<div class="sa-cover-sub text-xl mt-2">
  Stay up to date with the latest in testing
</div>

<div class="absolute bottom-6 left-8 text-sm opacity-80 leading-snug">
  <div class="font-600">Andre Löffler & Isabella Papageorgiou</div>
  <div>July 2026</div>
</div>

<Logo inverse class="absolute bottom-6 right-8" :height="24" />

<!--
layout: cover
-->

---

# Testing Fundamentals

<Cards :cols="3">
  <Card title="Unit">
    <ul>
      <li>Individual units shall meet their requirements.</li>
      <li>Define sets of input-parameter/output pairs.</li>
    </ul>
  </Card>
  <Card title="Integration" kind="win">
    <ul>
      <li>Conjunctions of units shall realize features.</li>
      <li>Define inputs outputs, but also configurations, callstacks.</li>
    </ul>
  </Card>
  <Card title="End to End" kind="win">
    <ul>
      <li>Feature sets shall implement the product.</li>
      <li>Define high-level usecases.</li>
    </ul>
  </Card>
</Cards>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# How We Slice This

<ul>
  <li>Our units are super small, often stand-alone functions, and we keep the <code>*.spec.ts</code> file next to them.</li>
  <li><code>*.permissions.e2e-spec.ts</code> are our top-down Controller + Considerations integration tests.</li>
  <li><code>*.queries.e2e-spec.ts</code> simulate user input and utilize multiple layers from client to database.</li>
  <li>Libs and smaller features often have "mixed" <code>*.e2e-spec.ts</code> files.</li>
</ul>

<div class="grid gap-6 mt-6">
  <div style="overflow-x: auto;">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="border-b-2 border-[#4381b0]">
          <th class="text-left font-600 py-2 px-3 text-[#4381b0]">Aspect</th>
          <td class="py-3 px-3 font-500">Service</td>
          <td class="py-3 px-3 font-500">Database</td>
          <td class="py-3 px-3 font-500">HTTP client</td>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-200">
          <th class="text-left font-600 py-2 px-3 text-[#795a9e]">Permissions</th>
          <td class="py-3 px-3"><code>jest.spyOn</code>'d</td>
          <td class="py-3 px-3">No access</td>
          <td class="py-3 px-3">Supertest</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="text-left font-600 py-2 px-3 text-[#66c1cd]">Queries</th>
          <td class="py-3 px-3">Runs real business logic</td>
          <td class="py-3 px-3">Yes — inserts + cleans up</td>
          <td class="py-3 px-3">Axios client</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Why the split matters

<p class="mb-1! text-sm opacity-75">
  Three key benefits of this architecture.
</p>

<Cards :cols="1">
  <Card class="text-sm mb-0" title="Permissions tests run in milliseconds">
    <div class="text-xs">Zero DB setup means they're fully deterministic and give instant feedback on access control logic.</div>
  </Card>
  <Card class="text-sm mb-0" title="Mocking gives you total control">
    <div class="text-xs">You can simulate "what the resource looks like" to test ownership scenarios — e.g., user matches but org doesn't.</div>
  </Card>
  <Card class="text-sm mb-0" title="Queries tests stay focused">
    <div class="text-xs">They test behaviour, not who's allowed to trigger it — permission logic is already verified elsewhere.</div>
  </Card>
</Cards>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Sidequest: Permissions

<p class="mb-1! text-sm opacity-75">
From the Database to the Gateway Passenger
</p>

<div class="grid grid-cols-[1fr_1fr] gap-6 items-start">

<div>
  <div v-click="2" class="overflow-y-hidden text-xs" style="max-height: 360px;">

```text
FUNCTION public.snapaddy_all_user_permissions
  (organization_id integer, user_id integer)
 RETURNS character varying[]
 LANGUAGE plpgsql
  ... (50+ lines)
```

  </div>

<Arrow v-click="2" v-bind="{ x1:255, y1:265, x2:195, y2:220 }" />
<Arrow v-click.hide="2" v-bind="{ x1:335, y1:235, x2:500, y2:170 }" />

  <div class="green-box overflow-y-hidden text-xs" style="max-height: 360px; float: right">

```text
snapaddy_permission
----------------------------
permission_id
permission_key
```

  </div>

</div> <!-- from database -->

<Arrow v-click="2" v-bind="{ x1:400, y1:145, x2:500, y2:145 }" />

<div>
  <div class="overflow-y-hidden text-xs" style="max-height: 360px;">

```text
"permissions": [
  ...
  "ACCESS_VR_GENERAL",
  "ACCESS_VR_ALL_QUESTIONNAIRES",
  "ACCESS_VR_ANALYTICS",
  "ACCESS_VR_ANALYTICS_PERSDATA",
  "ACCESS_VR_CONFIGURATOR",
  "ACCESS_VR_INVITE_REPORTER",
  ...
]
```

  </div>

</div> <!-- gateway passenger -->

<Arrow v-click="1" v-bind="{ x1:750, y1:375, x2:375, y2:300 }" />
<Arrow v-click="1" v-bind="{ x1:400, y1:365, x2:370, y2:305 }" />
<Arrow v-click="1" v-bind="{ x1:150, y1:375, x2:260, y2:300 }" />

</div>

<div class="grid grid-cols-[1fr_1fr_1fr] gap-6 items-start" style="margin-top: 20px">
  <div v-click="1" class="overflow-y-hidden text-xs" style="max-height: 360px;">

```text
snapaddy_role_permission
----------------------------
role_id
permission_id
```

  </div>

  <div v-click="1" class="overflow-y-hidden text-xs" style="max-height: 360px;">

```text
snapaddy_module_permission
----------------------------
module_id
permission_id
```

  </div>

  <div v-click="1" class="overflow-y-hidden text-xs" style="max-height: 360px;">

```text
snapaddy_user_permission
----------------------------
user_id
organization_id
permission_id
```

  </div>

</div>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Sidequest: Permissions Mocking

<Cards :cols="1" style="margin-bottom: 20px;">
  <Card class="text-sm mb-0 is-fail" title="To do this proper, you'd need to create the following for every test suite">
    <ul>
      <li>organization and user — to attach everything</li>
      <li>subscription and organization-subscription-type — to get the modules</li>
      <li>user-organization-membership, user-license, user-role  — for the role permissions</li>
    </ul>
  </Card>

  <Card class="text-sm mb-0" title="Mocking greatly improves the developer experience, but how?">
    <ul>
      <li>Just hard-code a short list of the permissions relevant to your current test suite?</li>
      <li>Those can't be trusted.</li>
    </ul>
  </Card>
</Cards>

```text
const vrUserPerms = ['ACCESS_VR_GENERAL', 'ACCESS_VR_FINALISE', 'ACCESS_BC_SETTINGS',
                     'ACCESS_VR_ALL_QUESTIONNAIRES', 'ACCESS_VR_UNRESTRICTED'];
```

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Sidequest: Permissions Mocking Proper

<Cards :cols="1">
  <Card class="text-sm mb-0" title="My personal Pain">
<ul>
  <li>I've been adding several new roles lately, some of them "Manager".</li>
  <li>This required replacing a lot of "is admin?" checks with <code>UserPermissionConsideration</code>.</li>
  <li>Looked into hundreds of tests: hard-coded lists and real users, test-tables and single cases.</li>
  <li>How to catch side-effects before they become hotfixes?</li>
</ul>
  </Card>
</Cards>

<h3 style="margin-top: 20px;">  The four-part Solution: put everything into snapaddy-test</h3>
<ul>
  <li><code>user-with-role.enum.ts</code>: list of all roles we have.</li>
  <li><code>permission-lists.constants.ts</code>: collection of lists of permissions for each role.</li>
  <li><code>getUserWithRoleDefinition(...)</code>: to map the enum values to the lists. Use this <em>everywhere!</em></li>
  <li>No "trust me, bro! <twemoji-see-no-evil-monkey />": integration-tested to match <code>snapaddy_all_user_permissions</code>.</li>
  <li>For the coverage, we have <code>exhaust(...)</code>...</li>
</ul>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Backend Test Baseline: Where We Are

<p class="mt-2 text-sm opacity-75">
  Every backend feature now has at least one test setup in place. <twemoji-partying-face />
</p>

<Cards :cols="2">
  <Card title="What is a test setup?">
    <ul>
      <li>Supertest type definitions and testing scripts in the package.json.</li>
      <li>Minimal app config and a minimal app module for focused test bootstrapping.</li>
      <li>Most features get a <code>create-test-data</code> file or folder for cleaner test-data handling.</li>
    </ul>
  </Card>
</Cards>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="isabella" />

---

<h1 class="text-3xl! leading-tight whitespace-nowrap tracking-tight">
  <code>CreateMinimalAppConfig</code> + <code>CreateMinimalAppModule</code>
</h1>

<p class="mt-2 mb-3! text-sm opacity-75">
  Two focused bootstrap helpers keep e2e setup lean, deterministic, and feature-scoped.
</p>

<div class="grid grid-cols-2 gap-6 mt-1 text-base leading-snug">
  <div class="rounded-2xl border border-[#4381b0]/20 bg-white/70 px-5 py-4 text-left shadow-sm">
    <div class="text-[11px] uppercase tracking-[0.12em] opacity-60">Config Helper</div>
    <h3 class="mt-1"><code>create-minimal-app-config.ts</code></h3>
    <ul class="mt-3 space-y-2">
      <li>Your feature <code>Environment</code> type with dummy secrets and test DB URLs.</li>
      <li>Includes <code>LISTEN_ADDRESS: 'http://127.0.0.1:0'</code>.</li>
      <li>Port <code>0</code> lets the OS assign a free port, preventing conflicts between tests and local dev servers.</li>
    </ul>
  </div>
  <div class="rounded-2xl border border-[#66c1cd]/25 bg-white/70 px-5 py-4 text-left shadow-sm">
    <div class="text-[11px] uppercase tracking-[0.12em] opacity-60">Module Helper</div>
    <h3 class="mt-1"><code>create-minimal-app-module.ts</code></h3>
    <ul class="mt-3 space-y-2">
      <li>NestJS module created inside a factory function (inline <code>@Module</code> class).</li>
      <li>Closes over <code>dummyLogger</code> and <code>minimalConfig</code>.</li>
      <li>Only imports what the feature needs: auth, config, logger, DB pool, Redis, and <code>BroadcastModule</code>.</li>
      <li>No inter-feature RPC clients, nothing extra.</li>
    </ul>
  </div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="isabella" />

---

# Test File Setup (`beforeAll`)

<p class="mb-1! text-sm opacity-75">
  A <code>beforeAll</code> hook combines these steps in order, picking only what each test type needs.
</p>

<div class="grid grid-cols-2 gap-3 text-xs leading-relaxed">
  <div class="rounded-xl border-l-4 border-[#4381b0] border border-[#4381b0]/20 bg-white/70 px-4 py-3 shadow-sm">
    <div class="font-600 text-[#4381b0] text-[11px] uppercase tracking-wide mb-1">1. Boot the app</div>
    <div class="opacity-75"><code>NestBootstrap</code>, apply <code>ValidationPipe</code>, set config, call <code>setupAccessControl</code>. Always first.</div>
  </div>
  <div class="rounded-xl border-l-4 border-[#66c1cd] border border-[#66c1cd]/20 bg-white/70 px-4 py-3 shadow-sm">
    <div class="font-600 text-[#66c1cd] text-[11px] uppercase tracking-wide mb-1">2. Wire up a client</div>
    <div class="opacity-75">Typed Axios client from <code>zzz-client</code> (queries tests) or Supertest (permissions tests).</div>
  </div>
  <div class="rounded-xl border-l-4 border-[#795a9e] border border-[#795a9e]/20 bg-white/70 px-4 py-3 shadow-sm">
    <div class="font-600 text-[#795a9e] text-[11px] uppercase tracking-wide mb-1">3. Set up test identity</div>
    <div class="opacity-75">Build passenger header(s) manually or from <code>getUserWithRoleDefinition</code>.</div>
  </div>
  <div class="rounded-xl border-l-4 border-[#4381b0] border border-[#4381b0]/20 bg-white/70 px-4 py-3 shadow-sm">
    <div class="font-600 text-[#4381b0] text-[11px] uppercase tracking-wide mb-1">4. Create DB state</div>
    <div class="opacity-75">Via raw <code>Pool</code> SQL, <code>TypeORM</code> <code>DataSource</code>, or <code>*TestService</code>. Queries tests only.</div>
  </div>
  <div class="col-span-2 rounded-xl border-l-4 border-[#66c1cd] border border-[#66c1cd]/20 bg-white/70 px-4 py-3 shadow-sm">
    <div class="font-600 text-[#66c1cd] text-[11px] uppercase tracking-wide mb-1">5. Register mocks</div>
    <div class="opacity-75"><code>jest.spyOn</code> or <code>SpyGroup</code> on service methods. Permissions &amp; unit tests only.</div>
  </div>
</div>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="isabella" />

---

# Test-tables made robust and easy

<p class="text-sm opacity-75">
  <code>exhaust()</code> will cover a lot of thinking for you.
</p>

<p class="text-sm opacity-75">
  Testcases with <code>Record&lt;UserWithRoleKeys, HttpStatus&gt;</code> will complain about missing rows
</p>

```ts
export function exhaust<
  TestCases extends Record<string | number | symbol, unknown>,
  Key extends keyof TestCases = keyof TestCases,
  Value extends TestCases[Key] = TestCases[Key],
  TestSetup extends unknown = unknown,
>(
  testCases: TestCases,
  testArgsFactory: (arg: Key, value: Value) => TestSetup,
): (
  description: string,
  testFn: (args: TestSetup) => void | PromiseLike<void>,
) => void {
  return test.each(
    Object.entries(testCases).map(([key, value]) =>
      testArgsFactory(key as Key, value as Value),
    ),
  );
}
```

<p class="text-sm font-600 mt-2">
  → Thin wrapper around <code>test.each</code> — but the input is a <code>Record&lt;EnumKey, …&gt;</code>, so TypeScript enforces every member is present at compile time.
</p>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="isabella" />

---

# `exhaust()` in the wild

```ts
const testCases: Record<UserWithRoleKeys, HttpStatus> = {
  REPORTER: HttpStatus.FORBIDDEN,
  VR_USER: HttpStatus.FORBIDDEN,
  ORGANIZATION_ADMIN: HttpStatus.CREATED,
  SNAPADDY_ADMIN: HttpStatus.CREATED,
};

exhaust(testCases, expectedStatusTransformer<UserWithRoleKeys>)(
  "should $expectation the role $roleName returning HTTP $expectedStatus",
  async ({ roleName, expectedStatus }) => {
    const roleDefinition = getUserWithRoleDefinition(roleName);
    const passengerHeader = passengerToString({
      ...roleDefinition,
      organizationId,
    });
    await request(app.getHttpServer())
      .put("/scim")
      .send(dto)
      .set(CommonBackendHeaders.GATEWAY_PASSENGER, passengerHeader)
      .expect(expectedStatus);
  },
);
```

<p class="text-sm opacity-75 mt-2">
  Add a new role to <code>UserWithRoleKeys</code> → TypeScript refuses to compile until <code>testCases</code> maps it to an <code>HttpStatus</code>.
  A plain <code>test.each</code> array silently misses new roles forever.
</p>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="isabella" />

---

# Test writing with AI

<p class="text-sm opacity-75">
  Let's experiment!
</p>

<div class="grid grid-cols-[1fr_1.4fr] gap-6 items-start">
  <img src="/assets/meme-split-tests.webp" class="rounded-xl w-full object-contain" alt="meme" />
  <div class="overflow-y-auto text-xs" style="max-height: 360px;">

```text
You are refactoring e2e test files in a NestJS TypeScript monorepo.

Convention
Controllers get two separate e2e spec files:

*.permissions.e2e-spec.ts — tests access control only. The service is mocked
via jest.spyOn. No real DB setup. Uses getUserWithRoleDefinition + exhaust +
expectedStatusTransformer to test every role. Contains the isProtectedByGuard
assertion.
*.queries.e2e-spec.ts — tests real behaviour against the database. No role
tables, no service mocking. Uses DataSource or Pool for real DB state.

Rules:
Each output file is fully self-contained with its own beforeAll that boots
the NestJS app via NestBootstrap.
Only import what each file actually uses. Do not copy all imports into both.
Do not change any test logic — only reorganise.
The permissions file gets: isProtectedByGuard check, all describe('permissions')
content, jest.spyOn setup and jest.restoreAllMocks() teardown.
The queries file gets: all DB test data setup (DataSource, Pool, testData.*),
all functional/behaviour tests.
If a beforeAll initialises both a service (for spying) and a dataSource (for DB),
split them so each file only initialises what it needs.

Task: Split each of the following files into a permissions and a queries file.
inbox-settings.controller.e2e-spec.ts
lead-research-settings.controller.e2e-spec.ts
linkedin-settings.controller.e2e-spec.ts
linkedin-settings-v2.controller.e2e-spec.ts
help-request.controller.e2e-spec.ts
```

  </div>
</div>
<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="isabella" />

---

# Current state of test-coverage

<h2 style="margin-top: 20px;">The Biggest</h2>

<Cards :cols="2">
  <Card class="text-sm mb-0"  title="2024"><table>
  <tbody>
    <tr><td style="width: 30px;">1.</td><td>nest-questionnaire <span style="margin-left: 5px; font-size: 10px;">16163 lines</span></td><td>14.29 %</td></tr>
    <tr><td style="width: 30px;">2.</td><td>similarity <span style="margin-left: 5px; font-size: 10px;">14411 lines</span></td><td>83.12 %</td></tr>
    <tr><td style="width: 30px;">3.</td><td>digital-cards <span style="margin-left: 5px; font-size: 10px;">11030 lines</span></td><td>87.86 %</td></tr>
    <tr v-click="1"><td style="width: 30px;">5.</td><td> questionnaire <span style="margin-left: 5px; font-size: 10px;">9603 lines</span></td><td>76.98 %</td></tr>
    <tr v-click="1"><td style="width: 30px;">6.</td><td> nest-workflows <span style="margin-left: 5px; font-size: 10px;">9133 lines</span></td><td>10.13 %</td></tr>
  </tbody>
  </table>
  </Card>
  <Card class="text-sm mb-0" title="2026"><table>
  <tbody>
    <tr><td style="width: 30px;">1.</td><td>questionnaire <span style="margin-left: 5px; font-size: 10px;">46226 lines</span></td><td>91.21 %</td></tr>
    <tr><td style="width: 30px;">2.</td><td>nest-workflows <span style="margin-left: 5px; font-size: 10px;">30293 lines</span></td><td>61.68 %</td></tr>
    <tr><td style="width: 30px;">3.</td><td>nest-questionnaire <span style="margin-left: 5px; font-size: 10px;">24134 lines</span></td><td>51.55 %</td></tr>
    <tr v-click="2"><td style="width: 30px;">5.</td><td>digital-cards <span style="margin-left: 5px; font-size: 10px;">20392 lines</span></td><td>89.75 %</td></tr>
    <tr v-click="2"><td style="width: 30px;">7.</td><td>similarity <span style="margin-left: 5px; font-size: 10px;">14338 lines</span></td><td>83.07 %</td></tr>
  </tbody>
  </table>
  </Card>
</Cards>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Current state of test-coverage

<h2 style="margin-top: 20px;">The Best</h2>

<Cards :cols="2">
  <Card class="text-sm mb-0"  title="2024"><table>
  <tbody>
    <tr><td style="width: 30px;">1.</td><td>digital-cards</td><td>87.86 %</td></tr>
    <tr><td style="width: 30px;">2.</td><td>similarity</td><td>83.12 %</td></tr>
    <tr><td style="width: 30px;">3.</td><td>questionnaire</td><td>76.98 %</td></tr>
    <tr v-click="1"><td style="width: 30px;"></td><td>organization</td><td></td></tr>
  </tbody>
  </table>
  </Card>
  <Card class="text-sm mb-0" title="2026"><table>
  <tbody>
    <tr style="width: 30px;"><td>1.</td><td>questionnaire</td><td>91.21 %</td></tr>
    <tr style="width: 30px;"><td>2.</td><td>organization</td><td>90.66 %</td></tr>
    <tr style="width: 30px;"><td>3.</td><td>digital-cards</td><td>89.75 %</td></tr>
    <tr v-click="1"><td style="width: 30px;">12.</td><td>similarity</td><td>83.07 %</td></tr>
  </tbody>
  </table>
  </Card>
</Cards>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />

---

# Final Remarks

<ul style="margin-bottom: 70px;">
  <li>Total coverage: 51.80 % to 67.27 % <twemoji-flexed-biceps /></li>
  <li>Huge improvements on old code, and strong new features <twemoji-flexed-biceps /></li>
  <li>Coverage on our most important packages is really high <twemoji-flexed-biceps /></li>
  <li>Recent pen-test results came out super-positive <twemoji-flexed-biceps /></li>
</ul>

<h2 v-click="1" style="text-align: center;">HUGE SALUTE TO ALL OF YOU</h2>
<h2 v-click="1" style="text-align: center;">KEEP IT UP!</h2>

<Logo class="absolute bottom-6 right-8" :height="24" />
<Head class="absolute bottom-6 left-8" :height="36" name="andre" />
