(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  939426,
  594734,
  713764,
  547160,
  875740,
  (e) => {
    "use strict";
    var t = e.i(363625),
      a = e.i(975948),
      r = e.i(189991),
      n = e.i(611573),
      i = e.i(467125),
      s = e.i(826051),
      o = e.i(569934),
      c = e.i(878023),
      u = e.i(959953),
      p = o;
    class m extends p.BaseError {
      constructor({ cause: e }) {
        super("Smart Account is not deployed.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- No `factory`/`factoryData` or `initCode` properties are provided for Smart Account deployment.",
            "- An incorrect `sender` address is provided.",
          ],
          name: "AccountNotDeployedError",
        });
      }
    }
    Object.defineProperty(m, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa20/,
    });
    class d extends p.BaseError {
      constructor({ cause: e, data: t, message: a } = {}) {
        const r = a
          ?.replace("execution reverted: ", "")
          ?.replace("execution reverted", "");
        super(
          `Execution reverted ${
            r ? `with reason: ${r}` : "for an unknown reason"
          }.`,
          { cause: e, name: "ExecutionRevertedError" }
        ),
          Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.data = t);
      }
    }
    Object.defineProperty(d, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32521,
    }),
      Object.defineProperty(d, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /execution reverted/,
      });
    class y extends p.BaseError {
      constructor({ cause: e }) {
        super("Failed to send funds to beneficiary.", {
          cause: e,
          name: "FailedToSendToBeneficiaryError",
        });
      }
    }
    Object.defineProperty(y, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa91/,
    });
    class l extends p.BaseError {
      constructor({ cause: e }) {
        super("Gas value overflowed.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- one of the gas values exceeded 2**120 (uint120)",
          ].filter(Boolean),
          name: "GasValuesOverflowError",
        });
      }
    }
    Object.defineProperty(l, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa94/,
    });
    class f extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "The `handleOps` function was called by the Bundler with a gas limit too low.",
          { cause: e, name: "HandleOpsOutOfGasError" }
        );
      }
    }
    Object.defineProperty(f, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa95/,
    });
    class g extends p.BaseError {
      constructor({ cause: e, factory: t, factoryData: a, initCode: r }) {
        super("Failed to simulate deployment for Smart Account.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- Invalid `factory`/`factoryData` or `initCode` properties are present",
            "- Smart Account deployment execution ran out of gas (low `verificationGasLimit` value)",
            "- Smart Account deployment execution reverted with an error\n",
            t && `factory: ${t}`,
            a && `factoryData: ${a}`,
            r && `initCode: ${r}`,
          ].filter(Boolean),
          name: "InitCodeFailedError",
        });
      }
    }
    Object.defineProperty(g, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa13/,
    });
    class b extends p.BaseError {
      constructor({ cause: e, factory: t, factoryData: a, initCode: r }) {
        super(
          "Smart Account initialization implementation did not create an account.",
          {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- `factory`/`factoryData` or `initCode` properties are invalid",
              "- Smart Account initialization implementation is incorrect\n",
              t && `factory: ${t}`,
              a && `factoryData: ${a}`,
              r && `initCode: ${r}`,
            ].filter(Boolean),
            name: "InitCodeMustCreateSenderError",
          }
        );
      }
    }
    Object.defineProperty(b, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa15/,
    });
    class v extends p.BaseError {
      constructor({
        cause: e,
        factory: t,
        factoryData: a,
        initCode: r,
        sender: n,
      }) {
        super(
          "Smart Account initialization implementation does not return the expected sender.",
          {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "Smart Account initialization implementation does not return a sender address\n",
              t && `factory: ${t}`,
              a && `factoryData: ${a}`,
              r && `initCode: ${r}`,
              n && `sender: ${n}`,
            ].filter(Boolean),
            name: "InitCodeMustReturnSenderError",
          }
        );
      }
    }
    Object.defineProperty(v, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa14/,
    });
    class w extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "Smart Account does not have sufficient funds to execute the User Operation.",
          {
            cause: e,
            metaMessages: [
              "This could arise when:",
              "- the Smart Account does not have sufficient funds to cover the required prefund, or",
              "- a Paymaster was not provided",
            ].filter(Boolean),
            name: "InsufficientPrefundError",
          }
        );
      }
    }
    Object.defineProperty(w, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa21/,
    });
    class x extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "Bundler attempted to call an invalid function on the EntryPoint.",
          { cause: e, name: "InternalCallOnlyError" }
        );
      }
    }
    Object.defineProperty(x, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa92/,
    });
    class h extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "Bundler used an invalid aggregator for handling aggregated User Operations.",
          { cause: e, name: "InvalidAggregatorError" }
        );
      }
    }
    Object.defineProperty(h, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa96/,
    });
    class P extends p.BaseError {
      constructor({ cause: e, nonce: t }) {
        super("Invalid Smart Account nonce used for User Operation.", {
          cause: e,
          metaMessages: [t && `nonce: ${t}`].filter(Boolean),
          name: "InvalidAccountNonceError",
        });
      }
    }
    Object.defineProperty(P, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa25/,
    });
    class G extends p.BaseError {
      constructor({ cause: e }) {
        super("Bundler has not set a beneficiary address.", {
          cause: e,
          name: "InvalidBeneficiaryError",
        });
      }
    }
    Object.defineProperty(G, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa90/,
    });
    class O extends p.BaseError {
      constructor({ cause: e }) {
        super("Invalid fields set on User Operation.", {
          cause: e,
          name: "InvalidFieldsError",
        });
      }
    }
    Object.defineProperty(O, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32602,
    });
    class E extends p.BaseError {
      constructor({ cause: e, paymasterAndData: t }) {
        super("Paymaster properties provided are invalid.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `paymasterAndData` property is of an incorrect length\n",
            t && `paymasterAndData: ${t}`,
          ].filter(Boolean),
          name: "InvalidPaymasterAndDataError",
        });
      }
    }
    Object.defineProperty(E, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa93/,
    });
    class D extends p.BaseError {
      constructor({ cause: e }) {
        super("Paymaster deposit for the User Operation is too low.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the Paymaster has deposited less than the expected amount via the `deposit` function",
          ].filter(Boolean),
          name: "PaymasterDepositTooLowError",
        });
      }
    }
    Object.defineProperty(D, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32508,
    }),
      Object.defineProperty(D, "message", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /aa31/,
      });
    class A extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "The `validatePaymasterUserOp` function on the Paymaster reverted.",
          { cause: e, name: "PaymasterFunctionRevertedError" }
        );
      }
    }
    Object.defineProperty(A, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa33/,
    });
    class B extends p.BaseError {
      constructor({ cause: e }) {
        super("The Paymaster contract has not been deployed.", {
          cause: e,
          name: "PaymasterNotDeployedError",
        });
      }
    }
    Object.defineProperty(B, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa30/,
    });
    class L extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
          { cause: e, name: "PaymasterRateLimitError" }
        );
      }
    }
    Object.defineProperty(L, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32504,
    });
    class U extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because paymaster (or signature aggregator) is throttled/banned.",
          { cause: e, name: "PaymasterStakeTooLowError" }
        );
      }
    }
    Object.defineProperty(U, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32505,
    });
    class C extends p.BaseError {
      constructor({ cause: e }) {
        super("Paymaster `postOp` function reverted.", {
          cause: e,
          name: "PaymasterPostOpFunctionRevertedError",
        });
      }
    }
    Object.defineProperty(C, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa50/,
    });
    class F extends p.BaseError {
      constructor({ cause: e, factory: t, factoryData: a, initCode: r }) {
        super("Smart Account has already been deployed.", {
          cause: e,
          metaMessages: [
            "Remove the following properties and try again:",
            t && "`factory`",
            a && "`factoryData`",
            r && "`initCode`",
          ].filter(Boolean),
          name: "SenderAlreadyConstructedError",
        });
      }
    }
    Object.defineProperty(F, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa10/,
    });
    class S extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because account signature check failed (or paymaster signature, if the paymaster uses its data as signature).",
          { cause: e, name: "SignatureCheckFailedError" }
        );
      }
    }
    Object.defineProperty(S, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32507,
    });
    class T extends p.BaseError {
      constructor({ cause: e }) {
        super("The `validateUserOp` function on the Smart Account reverted.", {
          cause: e,
          name: "SmartAccountFunctionRevertedError",
        });
      }
    }
    Object.defineProperty(T, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa23/,
    });
    class I extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation rejected because account specified unsupported signature aggregator.",
          { cause: e, name: "UnsupportedSignatureAggregatorError" }
        );
      }
    }
    Object.defineProperty(I, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32506,
    });
    class k extends p.BaseError {
      constructor({ cause: e }) {
        super("User Operation expired.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `validAfter` or `validUntil` values returned from `validateUserOp` on the Smart Account are not satisfied",
          ].filter(Boolean),
          name: "UserOperationExpiredError",
        });
      }
    }
    Object.defineProperty(k, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa22/,
    });
    class j extends p.BaseError {
      constructor({ cause: e }) {
        super("Paymaster for User Operation expired.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `validAfter` or `validUntil` values returned from `validatePaymasterUserOp` on the Paymaster are not satisfied",
          ].filter(Boolean),
          name: "UserOperationPaymasterExpiredError",
        });
      }
    }
    Object.defineProperty(j, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa32/,
    });
    class V extends p.BaseError {
      constructor({ cause: e }) {
        super("Signature provided for the User Operation is invalid.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Smart Account",
          ].filter(Boolean),
          name: "UserOperationSignatureError",
        });
      }
    }
    Object.defineProperty(V, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa24/,
    });
    class M extends p.BaseError {
      constructor({ cause: e }) {
        super("Signature provided for the User Operation is invalid.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `signature` for the User Operation is incorrectly computed, and unable to be verified by the Paymaster",
          ].filter(Boolean),
          name: "UserOperationPaymasterSignatureError",
        });
      }
    }
    Object.defineProperty(M, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa34/,
    });
    class H extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "User Operation rejected by EntryPoint's `simulateValidation` during account creation or validation.",
          { cause: e, name: "UserOperationRejectedByEntryPointError" }
        );
      }
    }
    Object.defineProperty(H, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32500,
    });
    class z extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "User Operation rejected by Paymaster's `validatePaymasterUserOp`.",
          { cause: e, name: "UserOperationRejectedByPaymasterError" }
        );
      }
    }
    Object.defineProperty(z, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32501,
    });
    class R extends p.BaseError {
      constructor({ cause: e }) {
        super("User Operation rejected with op code validation error.", {
          cause: e,
          name: "UserOperationRejectedByOpCodeError",
        });
      }
    }
    Object.defineProperty(R, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32502,
    });
    class N extends p.BaseError {
      constructor({ cause: e }) {
        super(
          "UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon).",
          { cause: e, name: "UserOperationOutOfTimeRangeError" }
        );
      }
    }
    Object.defineProperty(N, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: -32503,
    });
    class $ extends p.BaseError {
      constructor({ cause: e }) {
        super(
          `An error occurred while executing user operation: ${e?.shortMessage}`,
          { cause: e, name: "UnknownBundlerError" }
        );
      }
    }
    class q extends p.BaseError {
      constructor({ cause: e }) {
        super("User Operation verification gas limit exceeded.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the gas used for verification exceeded the `verificationGasLimit`",
          ].filter(Boolean),
          name: "VerificationGasLimitExceededError",
        });
      }
    }
    Object.defineProperty(q, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa40/,
    });
    class _ extends p.BaseError {
      constructor({ cause: e }) {
        super("User Operation verification gas limit is too low.", {
          cause: e,
          metaMessages: [
            "This could arise when:",
            "- the `verificationGasLimit` is too low to verify the User Operation",
          ].filter(Boolean),
          name: "VerificationGasLimitTooLowError",
        });
      }
    }
    Object.defineProperty(_, "message", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /aa41/,
    });
    var W = o,
      K = e.i(393702),
      Z = e.i(976486);
    class J extends W.BaseError {
      constructor(
        e,
        {
          callData: t,
          callGasLimit: a,
          docsPath: r,
          factory: n,
          factoryData: i,
          initCode: s,
          maxFeePerGas: o,
          maxPriorityFeePerGas: c,
          nonce: u,
          paymaster: p,
          paymasterAndData: m,
          paymasterData: d,
          paymasterPostOpGasLimit: y,
          paymasterVerificationGasLimit: l,
          preVerificationGas: f,
          sender: g,
          signature: b,
          verificationGasLimit: v,
        }
      ) {
        const w = (0, K.prettyPrint)({
          callData: t,
          callGasLimit: a,
          factory: n,
          factoryData: i,
          initCode: s,
          maxFeePerGas: void 0 !== o && `${(0, Z.formatGwei)(o)} gwei`,
          maxPriorityFeePerGas: void 0 !== c && `${(0, Z.formatGwei)(c)} gwei`,
          nonce: u,
          paymaster: p,
          paymasterAndData: m,
          paymasterData: d,
          paymasterPostOpGasLimit: y,
          paymasterVerificationGasLimit: l,
          preVerificationGas: f,
          sender: g,
          signature: b,
          verificationGasLimit: v,
        });
        super(e.shortMessage, {
          cause: e,
          docsPath: r,
          metaMessages: [
            ...(e.metaMessages ? [...e.metaMessages, " "] : []),
            "Request Arguments:",
            w,
          ].filter(Boolean),
          name: "UserOperationExecutionError",
        }),
          Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.cause = e);
      }
    }
    class Q extends W.BaseError {
      constructor({ hash: e }) {
        super(
          `User Operation receipt with hash "${e}" could not be found. The User Operation may not have been processed yet.`,
          { name: "UserOperationReceiptNotFoundError" }
        );
      }
    }
    class X extends W.BaseError {
      constructor({ hash: e }) {
        super(`User Operation with hash "${e}" could not be found.`, {
          name: "UserOperationNotFoundError",
        });
      }
    }
    class Y extends W.BaseError {
      constructor({ hash: e }) {
        super(
          `Timed out while waiting for User Operation with hash "${e}" to be confirmed.`,
          { name: "WaitForUserOperationReceiptTimeoutError" }
        );
      }
    }
    let ee = [d, O, D, L, U, S, I, N, H, z, R];
    function et(e, { calls: t, docsPath: a, ...r }) {
      return new J(
        (() => {
          let a = (function (e, t) {
            let a = (e.details || "").toLowerCase();
            if (m.message.test(a)) return new m({ cause: e });
            if (y.message.test(a)) return new y({ cause: e });
            if (l.message.test(a)) return new l({ cause: e });
            if (f.message.test(a)) return new f({ cause: e });
            if (g.message.test(a))
              return new g({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
              });
            if (b.message.test(a))
              return new b({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
              });
            if (v.message.test(a))
              return new v({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
                sender: t.sender,
              });
            if (w.message.test(a)) return new w({ cause: e });
            if (x.message.test(a)) return new x({ cause: e });
            if (P.message.test(a)) return new P({ cause: e, nonce: t.nonce });
            if (h.message.test(a)) return new h({ cause: e });
            if (G.message.test(a)) return new G({ cause: e });
            if (E.message.test(a)) return new E({ cause: e });
            if (D.message.test(a)) return new D({ cause: e });
            if (A.message.test(a)) return new A({ cause: e });
            if (B.message.test(a)) return new B({ cause: e });
            if (C.message.test(a)) return new C({ cause: e });
            if (T.message.test(a)) return new T({ cause: e });
            if (F.message.test(a))
              return new F({
                cause: e,
                factory: t.factory,
                factoryData: t.factoryData,
                initCode: t.initCode,
              });
            if (k.message.test(a)) return new k({ cause: e });
            if (j.message.test(a)) return new j({ cause: e });
            if (M.message.test(a)) return new M({ cause: e });
            if (V.message.test(a)) return new V({ cause: e });
            if (q.message.test(a)) return new q({ cause: e });
            if (_.message.test(a)) return new _({ cause: e });
            let r = e.walk((e) => ee.some((t) => t.code === e.code));
            if (r) {
              if (r.code === d.code)
                return new d({ cause: e, data: r.data, message: r.details });
              if (r.code === O.code) return new O({ cause: e });
              if (r.code === D.code) return new D({ cause: e });
              if (r.code === L.code) return new L({ cause: e });
              if (r.code === U.code) return new U({ cause: e });
              if (r.code === S.code) return new S({ cause: e });
              if (r.code === I.code) return new I({ cause: e });
              if (r.code === N.code) return new N({ cause: e });
              if (r.code === H.code) return new H({ cause: e });
              if (r.code === z.code) return new z({ cause: e });
              if (r.code === R.code) return new R({ cause: e });
            }
            return new $({ cause: e });
          })(e, r);
          if (t && a instanceof d) {
            let e,
              r =
                (a.walk((t) => {
                  if (
                    "string" == typeof t.data ||
                    "string" == typeof t.data?.revertData ||
                    (!(t instanceof o.BaseError) &&
                      "string" == typeof t.message)
                  ) {
                    let a = (t.data?.revertData || t.data || t.message).match?.(
                      /(0x[A-Za-z0-9]*)/
                    );
                    if (a) return (e = a[1]), !0;
                  }
                  return !1;
                }),
                e),
              n = t?.filter((e) => e.abi);
            if (r && n.length > 0)
              return (function (e) {
                let { calls: t, revertData: a } = e,
                  {
                    abi: r,
                    functionName: n,
                    args: i,
                    to: s,
                  } = (() => {
                    let e = t?.filter((e) => !!e.abi);
                    if (1 === e.length) return e[0];
                    let r = e.filter((e) => {
                      try {
                        return !!(0, u.decodeErrorResult)({
                          abi: e.abi,
                          data: a,
                        });
                      } catch {
                        return !1;
                      }
                    });
                    return 1 === r.length
                      ? r[0]
                      : {
                          abi: [],
                          functionName: e.reduce(
                            (e, t) => `${e ? `${e} | ` : ""}${t.functionName}`,
                            ""
                          ),
                          args: void 0,
                          to: void 0,
                        };
                  })(),
                  o =
                    "0x" === a
                      ? new c.ContractFunctionZeroDataError({ functionName: n })
                      : new c.ContractFunctionRevertedError({
                          abi: r,
                          data: a,
                          functionName: n,
                        });
                return new c.ContractFunctionExecutionError(o, {
                  abi: r,
                  args: i,
                  contractAddress: s,
                  functionName: n,
                });
              })({ calls: n, revertData: r });
          }
          return a;
        })(),
        { docsPath: a, ...r }
      );
    }
    var ea = e.i(675107),
      er = e.i(22411);
    function en(e) {
      var t;
      let a = {};
      return (
        void 0 !== e.callData && (a.callData = e.callData),
        void 0 !== e.callGasLimit &&
          (a.callGasLimit = (0, ea.numberToHex)(e.callGasLimit)),
        void 0 !== e.factory && (a.factory = e.factory),
        void 0 !== e.factoryData && (a.factoryData = e.factoryData),
        void 0 !== e.initCode && (a.initCode = e.initCode),
        void 0 !== e.maxFeePerGas &&
          (a.maxFeePerGas = (0, ea.numberToHex)(e.maxFeePerGas)),
        void 0 !== e.maxPriorityFeePerGas &&
          (a.maxPriorityFeePerGas = (0, ea.numberToHex)(
            e.maxPriorityFeePerGas
          )),
        void 0 !== e.nonce && (a.nonce = (0, ea.numberToHex)(e.nonce)),
        void 0 !== e.paymaster && (a.paymaster = e.paymaster),
        void 0 !== e.paymasterAndData &&
          (a.paymasterAndData = e.paymasterAndData || "0x"),
        void 0 !== e.paymasterData && (a.paymasterData = e.paymasterData),
        void 0 !== e.paymasterPostOpGasLimit &&
          (a.paymasterPostOpGasLimit = (0, ea.numberToHex)(
            e.paymasterPostOpGasLimit
          )),
        void 0 !== e.paymasterSignature &&
          (a.paymasterSignature = e.paymasterSignature),
        void 0 !== e.paymasterVerificationGasLimit &&
          (a.paymasterVerificationGasLimit = (0, ea.numberToHex)(
            e.paymasterVerificationGasLimit
          )),
        void 0 !== e.preVerificationGas &&
          (a.preVerificationGas = (0, ea.numberToHex)(e.preVerificationGas)),
        void 0 !== e.sender && (a.sender = e.sender),
        void 0 !== e.signature && (a.signature = e.signature),
        void 0 !== e.verificationGasLimit &&
          (a.verificationGasLimit = (0, ea.numberToHex)(
            e.verificationGasLimit
          )),
        void 0 !== e.authorization &&
          (a.eip7702Auth = {
            address: (t = e.authorization).address,
            chainId: (0, ea.numberToHex)(t.chainId),
            nonce: (0, ea.numberToHex)(t.nonce),
            r: t.r
              ? (0, ea.numberToHex)(BigInt(t.r), { size: 32 })
              : (0, er.pad)("0x", { size: 32 }),
            s: t.s
              ? (0, ea.numberToHex)(BigInt(t.s), { size: 32 })
              : (0, er.pad)("0x", { size: 32 }),
            yParity: t.yParity
              ? (0, ea.numberToHex)(t.yParity, { size: 1 })
              : (0, er.pad)("0x", { size: 32 }),
          }),
        a
      );
    }
    var ei = e.i(829897),
      es = e.i(972960),
      eo = e.i(656679),
      ec = e.i(147526),
      eu = e.i(450323);
    async function ep(e, t) {
      let { chainId: a, entryPointAddress: r, context: n, ...i } = t,
        s = en(i),
        {
          paymasterPostOpGasLimit: o,
          paymasterVerificationGasLimit: c,
          ...u
        } = await e.request({
          method: "pm_getPaymasterData",
          params: [
            {
              ...s,
              callGasLimit: s.callGasLimit ?? "0x0",
              verificationGasLimit: s.verificationGasLimit ?? "0x0",
              preVerificationGas: s.preVerificationGas ?? "0x0",
            },
            r,
            (0, ea.numberToHex)(a),
            n,
          ],
        });
      return {
        ...u,
        ...(o && { paymasterPostOpGasLimit: (0, eu.hexToBigInt)(o) }),
        ...(c && { paymasterVerificationGasLimit: (0, eu.hexToBigInt)(c) }),
      };
    }
    async function em(e, t) {
      let { chainId: a, entryPointAddress: r, context: n, ...i } = t,
        s = en(i),
        {
          paymasterPostOpGasLimit: o,
          paymasterVerificationGasLimit: c,
          ...u
        } = await e.request({
          method: "pm_getPaymasterStubData",
          params: [
            {
              ...s,
              callGasLimit: s.callGasLimit ?? "0x0",
              verificationGasLimit: s.verificationGasLimit ?? "0x0",
              preVerificationGas: s.preVerificationGas ?? "0x0",
            },
            r,
            (0, ea.numberToHex)(a),
            n,
          ],
        });
      return {
        ...u,
        ...(o && { paymasterPostOpGasLimit: (0, eu.hexToBigInt)(o) }),
        ...(c && { paymasterVerificationGasLimit: (0, eu.hexToBigInt)(c) }),
      };
    }
    let ed = [
      "factory",
      "fees",
      "gas",
      "paymaster",
      "nonce",
      "signature",
      "authorization",
    ];
    async function ey(e, t) {
      let s,
        {
          account: o = e.account,
          dataSuffix: c = "string" == typeof e.dataSuffix
            ? e.dataSuffix
            : e.dataSuffix?.value,
          parameters: u = ed,
          stateOverride: p,
        } = t;
      if (!o) throw new n.AccountNotFoundError();
      let m = (0, r.parseAccount)(o),
        d = t.paymaster ?? e?.paymaster,
        y = "string" == typeof d ? d : void 0,
        { getPaymasterStubData: l, getPaymasterData: f } = (() => {
          if (!0 === d)
            return {
              getPaymasterStubData: (t) =>
                (0, i.getAction)(e, em, "getPaymasterStubData")(t),
              getPaymasterData: (t) =>
                (0, i.getAction)(e, ep, "getPaymasterData")(t),
            };
          if ("object" == typeof d) {
            let { getPaymasterStubData: e, getPaymasterData: t } = d;
            return {
              getPaymasterStubData: t && e ? e : t,
              getPaymasterData: t && e ? t : void 0,
            };
          }
          return { getPaymasterStubData: void 0, getPaymasterData: void 0 };
        })(),
        g = t.paymasterContext ? t.paymasterContext : e?.paymasterContext,
        b = { ...t, paymaster: y, sender: m.address },
        [v, w, x, h, P] = await Promise.all([
          (async () =>
            t.calls
              ? m.encodeCalls(
                  t.calls.map((e) =>
                    e.abi
                      ? {
                          data: (0, eo.encodeFunctionData)(e),
                          to: e.to,
                          value: e.value,
                        }
                      : e
                  )
                )
              : t.callData)(),
          (async () => {
            if (!u.includes("factory")) return;
            if (t.initCode) return { initCode: t.initCode };
            if (t.factory && t.factoryData)
              return { factory: t.factory, factoryData: t.factoryData };
            let { factory: e, factoryData: a } = await m.getFactoryArgs();
            return "0.6" === m.entryPoint.version
              ? { initCode: e && a ? (0, ec.concat)([e, a]) : void 0 }
              : { factory: e, factoryData: a };
          })(),
          (async () => {
            if (u.includes("fees")) {
              if (
                "bigint" == typeof t.maxFeePerGas &&
                "bigint" == typeof t.maxPriorityFeePerGas
              )
                return b;
              if (e?.userOperation?.estimateFeesPerGas) {
                let t = await e.userOperation.estimateFeesPerGas({
                  account: m,
                  bundlerClient: e,
                  userOperation: b,
                });
                return { ...b, ...t };
              }
              try {
                let a = e.client ?? e,
                  r = await (0, i.getAction)(
                    a,
                    es.estimateFeesPerGas,
                    "estimateFeesPerGas"
                  )({ chain: a.chain, type: "eip1559" });
                return {
                  maxFeePerGas:
                    "bigint" == typeof t.maxFeePerGas
                      ? t.maxFeePerGas
                      : BigInt(2n * r.maxFeePerGas),
                  maxPriorityFeePerGas:
                    "bigint" == typeof t.maxPriorityFeePerGas
                      ? t.maxPriorityFeePerGas
                      : BigInt(2n * r.maxPriorityFeePerGas),
                };
              } catch {
                return;
              }
            }
          })(),
          (async () => {
            if (u.includes("nonce"))
              return "bigint" == typeof t.nonce ? t.nonce : m.getNonce();
          })(),
          (async () => {
            if (u.includes("authorization")) {
              if ("object" == typeof t.authorization) return t.authorization;
              if (m.authorization && !(await m.isDeployed()))
                return {
                  ...(await (0, ei.prepareAuthorization)(
                    m.client,
                    m.authorization
                  )),
                  r: "0xfffffffffffffffffffffffffffffff000000000000000000000000000000000",
                  s: "0x7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  yParity: 1,
                };
            }
          })(),
        ]);
      async function G() {
        return (
          s ||
          (e.chain
            ? e.chain.id
            : (s = await (0, i.getAction)(e, a.getChainId, "getChainId")({})))
        );
      }
      void 0 !== v && (b.callData = c ? (0, ec.concat)([v, c]) : v),
        void 0 !== w && (b = { ...b, ...w }),
        void 0 !== x && (b = { ...b, ...x }),
        void 0 !== h && (b.nonce = h),
        void 0 !== P && (b.authorization = P),
        u.includes("signature") &&
          (void 0 !== t.signature
            ? (b.signature = t.signature)
            : (b.signature = await m.getStubSignature(b))),
        "0.6" !== m.entryPoint.version || b.initCode || (b.initCode = "0x");
      let O = !1;
      if (u.includes("paymaster") && l && !y && !t.paymasterAndData) {
        let {
          isFinal: e = !1,
          sponsor: t,
          ...a
        } = await l({
          chainId: await G(),
          entryPointAddress: m.entryPoint.address,
          context: g,
          ...b,
        });
        (O = e), (b = { ...b, ...a });
      }
      if (
        ("0.6" !== m.entryPoint.version ||
          b.paymasterAndData ||
          (b.paymasterAndData = "0x"),
        u.includes("gas"))
      ) {
        if (m.userOperation?.estimateGas) {
          let e = await m.userOperation.estimateGas(b);
          b = { ...b, ...e };
        }
        if (
          void 0 === b.callGasLimit ||
          void 0 === b.preVerificationGas ||
          void 0 === b.verificationGasLimit ||
          (b.paymaster && void 0 === b.paymasterPostOpGasLimit) ||
          (b.paymaster && void 0 === b.paymasterVerificationGasLimit)
        ) {
          let t = await (0, i.getAction)(
            e,
            el,
            "estimateUserOperationGas"
          )({
            account: m,
            callGasLimit: 0n,
            preVerificationGas: 0n,
            verificationGasLimit: 0n,
            stateOverride: p,
            ...(b.paymaster
              ? {
                  paymasterPostOpGasLimit: 0n,
                  paymasterVerificationGasLimit: 0n,
                }
              : {}),
            ...b,
          });
          b = {
            ...b,
            callGasLimit: b.callGasLimit ?? t.callGasLimit,
            preVerificationGas: b.preVerificationGas ?? t.preVerificationGas,
            verificationGasLimit:
              b.verificationGasLimit ?? t.verificationGasLimit,
            paymasterPostOpGasLimit:
              b.paymasterPostOpGasLimit ?? t.paymasterPostOpGasLimit,
            paymasterVerificationGasLimit:
              b.paymasterVerificationGasLimit ??
              t.paymasterVerificationGasLimit,
          };
        }
      }
      if (u.includes("paymaster") && f && !y && !t.paymasterAndData && !O) {
        let e = await f({
          chainId: await G(),
          entryPointAddress: m.entryPoint.address,
          context: g,
          ...b,
        });
        b = { ...b, ...e };
      }
      return (
        delete b.calls,
        delete b.parameters,
        delete b.paymasterContext,
        "string" != typeof b.paymaster && delete b.paymaster,
        b
      );
    }
    async function el(e, t) {
      let {
        account: a = e.account,
        entryPointAddress: o,
        stateOverride: c,
      } = t;
      if (!a && !t.sender) throw new n.AccountNotFoundError();
      let u = a ? (0, r.parseAccount)(a) : void 0,
        p = (0, s.serializeStateOverride)(c),
        m = u
          ? await (0, i.getAction)(
              e,
              ey,
              "prepareUserOperation"
            )({
              ...t,
              parameters: [
                "authorization",
                "factory",
                "nonce",
                "paymaster",
                "signature",
              ],
            })
          : t;
      try {
        var d;
        let t,
          a = [en(m), o ?? u?.entryPoint?.address];
        return (
          (d = await e.request({
            method: "eth_estimateUserOperationGas",
            params: p ? [...a, p] : [...a],
          })),
          (t = {}),
          d.callGasLimit && (t.callGasLimit = BigInt(d.callGasLimit)),
          d.preVerificationGas &&
            (t.preVerificationGas = BigInt(d.preVerificationGas)),
          d.verificationGasLimit &&
            (t.verificationGasLimit = BigInt(d.verificationGasLimit)),
          d.paymasterPostOpGasLimit &&
            (t.paymasterPostOpGasLimit = BigInt(d.paymasterPostOpGasLimit)),
          d.paymasterVerificationGasLimit &&
            (t.paymasterVerificationGasLimit = BigInt(
              d.paymasterVerificationGasLimit
            )),
          t
        );
      } catch (a) {
        let e = t.calls;
        throw et(a, { ...m, ...(e ? { calls: e } : {}) });
      }
    }
    async function ef(e, { hash: t }) {
      let a,
        r = await e.request(
          { method: "eth_getUserOperationByHash", params: [t] },
          { dedupe: !0 }
        );
      if (!r) throw new X({ hash: t });
      let {
        blockHash: n,
        blockNumber: i,
        entryPoint: s,
        transactionHash: o,
        userOperation: c,
      } = r;
      return {
        blockHash: n,
        blockNumber: BigInt(i),
        entryPoint: s,
        transactionHash: o,
        userOperation:
          ((a = { ...c }),
          c.callGasLimit && (a.callGasLimit = BigInt(c.callGasLimit)),
          c.maxFeePerGas && (a.maxFeePerGas = BigInt(c.maxFeePerGas)),
          c.maxPriorityFeePerGas &&
            (a.maxPriorityFeePerGas = BigInt(c.maxPriorityFeePerGas)),
          c.nonce && (a.nonce = BigInt(c.nonce)),
          c.paymasterPostOpGasLimit &&
            (a.paymasterPostOpGasLimit = BigInt(c.paymasterPostOpGasLimit)),
          c.paymasterVerificationGasLimit &&
            (a.paymasterVerificationGasLimit = BigInt(
              c.paymasterVerificationGasLimit
            )),
          c.preVerificationGas &&
            (a.preVerificationGas = BigInt(c.preVerificationGas)),
          c.verificationGasLimit &&
            (a.verificationGasLimit = BigInt(c.verificationGasLimit)),
          a),
      };
    }
    var eg = e.i(856324),
      eb = e.i(839080);
    async function ev(e, { hash: t }) {
      let a,
        r = await e.request(
          { method: "eth_getUserOperationReceipt", params: [t] },
          { dedupe: !0 }
        );
      if (!r) throw new Q({ hash: t });
      return (
        (a = { ...r }),
        r.actualGasCost && (a.actualGasCost = BigInt(r.actualGasCost)),
        r.actualGasUsed && (a.actualGasUsed = BigInt(r.actualGasUsed)),
        r.logs && (a.logs = r.logs.map((e) => (0, eg.formatLog)(e))),
        r.receipt && (a.receipt = (0, eb.formatTransactionReceipt)(a.receipt)),
        a
      );
    }
    async function ew(e, t) {
      let { account: a = e.account, entryPointAddress: s } = t;
      if (!a && !t.sender) throw new n.AccountNotFoundError();
      let o = a ? (0, r.parseAccount)(a) : void 0,
        c = o ? await (0, i.getAction)(e, ey, "prepareUserOperation")(t) : t,
        u = t.signature || (await o?.signUserOperation?.(c)),
        p = en({ ...c, signature: u });
      try {
        return await e.request(
          {
            method: "eth_sendUserOperation",
            params: [p, s ?? o?.entryPoint?.address],
          },
          { retryCount: 0 }
        );
      } catch (a) {
        let e = t.calls;
        throw et(a, { ...c, ...(e ? { calls: e } : {}), signature: u });
      }
    }
    var ex = e.i(43473),
      eh = e.i(976215),
      eP = e.i(34888);
    function eG(e) {
      return {
        estimateUserOperationGas: (t) => el(e, t),
        getChainId: () => (0, a.getChainId)(e),
        getSupportedEntryPoints: () =>
          e.request({ method: "eth_supportedEntryPoints" }),
        getUserOperation: (t) => ef(e, t),
        getUserOperationReceipt: (t) => ev(e, t),
        prepareUserOperation: (t) => ey(e, t),
        sendUserOperation: (t) => ew(e, t),
        waitForUserOperationReceipt: (t) =>
          (function (e, t) {
            let {
                hash: a,
                pollingInterval: r = e.pollingInterval,
                retryCount: n,
                timeout: s = 12e4,
              } = t,
              o = 0,
              c = (0, eP.stringify)(["waitForUserOperationReceipt", e.uid, a]);
            return new Promise((t, u) => {
              let p = (0, ex.observe)(c, { resolve: t, reject: u }, (t) => {
                let c = (e) => {
                    m(), e(), p();
                  },
                  u = s
                    ? setTimeout(() => c(() => t.reject(new Y({ hash: a }))), s)
                    : void 0,
                  m = (0, eh.poll)(
                    async () => {
                      n &&
                        o >= n &&
                        (clearTimeout(u),
                        c(() => t.reject(new Y({ hash: a }))));
                      try {
                        let r = await (0, i.getAction)(
                          e,
                          ev,
                          "getUserOperationReceipt"
                        )({ hash: a });
                        clearTimeout(u), c(() => t.resolve(r));
                      } catch (e) {
                        "UserOperationReceiptNotFoundError" !== e.name &&
                          (clearTimeout(u), c(() => t.reject(e)));
                      }
                      o++;
                    },
                    { emitOnBegin: !0, interval: r }
                  );
                return m;
              });
            });
          })(e, t),
      };
    }
    function eO(e) {
      let {
        client: a,
        dataSuffix: r,
        key: n = "bundler",
        name: i = "Bundler Client",
        paymaster: s,
        paymasterContext: o,
        transport: c,
        userOperation: u,
      } = e;
      return Object.assign(
        (0, t.createClient)({
          ...e,
          chain: e.chain ?? a?.chain,
          key: n,
          name: i,
          transport: c,
          type: "bundlerClient",
        }),
        {
          client: a,
          dataSuffix: r ?? a?.dataSuffix,
          paymaster: s,
          paymasterContext: o,
          userOperation: u,
        }
      ).extend(eG);
    }
    e.s(["createBundlerClient", () => eO], 939426);
    let eE = [
      {
        inputs: [
          { name: "preOpGas", type: "uint256" },
          { name: "paid", type: "uint256" },
          { name: "validAfter", type: "uint48" },
          { name: "validUntil", type: "uint48" },
          { name: "targetSuccess", type: "bool" },
          { name: "targetResult", type: "bytes" },
        ],
        name: "ExecutionResult",
        type: "error",
      },
      {
        inputs: [
          { name: "opIndex", type: "uint256" },
          { name: "reason", type: "string" },
        ],
        name: "FailedOp",
        type: "error",
      },
      {
        inputs: [{ name: "sender", type: "address" }],
        name: "SenderAddressResult",
        type: "error",
      },
      {
        inputs: [{ name: "aggregator", type: "address" }],
        name: "SignatureValidationFailed",
        type: "error",
      },
      {
        inputs: [
          {
            components: [
              { name: "preOpGas", type: "uint256" },
              { name: "prefund", type: "uint256" },
              { name: "sigFailed", type: "bool" },
              { name: "validAfter", type: "uint48" },
              { name: "validUntil", type: "uint48" },
              { name: "paymasterContext", type: "bytes" },
            ],
            name: "returnInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "senderInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "factoryInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "paymasterInfo",
            type: "tuple",
          },
        ],
        name: "ValidationResult",
        type: "error",
      },
      {
        inputs: [
          {
            components: [
              { name: "preOpGas", type: "uint256" },
              { name: "prefund", type: "uint256" },
              { name: "sigFailed", type: "bool" },
              { name: "validAfter", type: "uint48" },
              { name: "validUntil", type: "uint48" },
              { name: "paymasterContext", type: "bytes" },
            ],
            name: "returnInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "senderInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "factoryInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "stake", type: "uint256" },
              { name: "unstakeDelaySec", type: "uint256" },
            ],
            name: "paymasterInfo",
            type: "tuple",
          },
          {
            components: [
              { name: "aggregator", type: "address" },
              {
                components: [
                  { name: "stake", type: "uint256" },
                  { name: "unstakeDelaySec", type: "uint256" },
                ],
                name: "stakeInfo",
                type: "tuple",
              },
            ],
            name: "aggregatorInfo",
            type: "tuple",
          },
        ],
        name: "ValidationResultWithAggregation",
        type: "error",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "userOpHash", type: "bytes32" },
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !1, name: "factory", type: "address" },
          { indexed: !1, name: "paymaster", type: "address" },
        ],
        name: "AccountDeployed",
        type: "event",
      },
      { anonymous: !1, inputs: [], name: "BeforeExecution", type: "event" },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "totalDeposit", type: "uint256" },
        ],
        name: "Deposited",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [{ indexed: !0, name: "aggregator", type: "address" }],
        name: "SignatureAggregatorChanged",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "totalStaked", type: "uint256" },
          { indexed: !1, name: "unstakeDelaySec", type: "uint256" },
        ],
        name: "StakeLocked",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "withdrawTime", type: "uint256" },
        ],
        name: "StakeUnlocked",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "withdrawAddress", type: "address" },
          { indexed: !1, name: "amount", type: "uint256" },
        ],
        name: "StakeWithdrawn",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "userOpHash", type: "bytes32" },
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !0, name: "paymaster", type: "address" },
          { indexed: !1, name: "nonce", type: "uint256" },
          { indexed: !1, name: "success", type: "bool" },
          { indexed: !1, name: "actualGasCost", type: "uint256" },
          { indexed: !1, name: "actualGasUsed", type: "uint256" },
        ],
        name: "UserOperationEvent",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "userOpHash", type: "bytes32" },
          { indexed: !0, name: "sender", type: "address" },
          { indexed: !1, name: "nonce", type: "uint256" },
          { indexed: !1, name: "revertReason", type: "bytes" },
        ],
        name: "UserOperationRevertReason",
        type: "event",
      },
      {
        anonymous: !1,
        inputs: [
          { indexed: !0, name: "account", type: "address" },
          { indexed: !1, name: "withdrawAddress", type: "address" },
          { indexed: !1, name: "amount", type: "uint256" },
        ],
        name: "Withdrawn",
        type: "event",
      },
      {
        inputs: [],
        name: "SIG_VALIDATION_FAILED",
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "initCode", type: "bytes" },
          { name: "sender", type: "address" },
          { name: "paymasterAndData", type: "bytes" },
        ],
        name: "_validateSenderAndPaymaster",
        outputs: [],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "unstakeDelaySec", type: "uint32" }],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [{ name: "", type: "address" }],
        name: "deposits",
        outputs: [
          { name: "deposit", type: "uint112" },
          { name: "staked", type: "bool" },
          { name: "stake", type: "uint112" },
          { name: "unstakeDelaySec", type: "uint32" },
          { name: "withdrawTime", type: "uint48" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "account", type: "address" }],
        name: "getDepositInfo",
        outputs: [
          {
            components: [
              { name: "deposit", type: "uint112" },
              { name: "staked", type: "bool" },
              { name: "stake", type: "uint112" },
              { name: "unstakeDelaySec", type: "uint32" },
              { name: "withdrawTime", type: "uint48" },
            ],
            name: "info",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { name: "sender", type: "address" },
          { name: "key", type: "uint192" },
        ],
        name: "getNonce",
        outputs: [{ name: "nonce", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ name: "initCode", type: "bytes" }],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "getUserOpHash",
        outputs: [{ name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "initCode", type: "bytes" },
                  { name: "callData", type: "bytes" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                  { name: "paymasterAndData", type: "bytes" },
                  { name: "signature", type: "bytes" },
                ],
                name: "userOps",
                type: "tuple[]",
              },
              { name: "aggregator", type: "address" },
              { name: "signature", type: "bytes" },
            ],
            name: "opsPerAggregator",
            type: "tuple[]",
          },
          { name: "beneficiary", type: "address" },
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "ops",
            type: "tuple[]",
          },
          { name: "beneficiary", type: "address" },
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ name: "key", type: "uint192" }],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "callData", type: "bytes" },
          {
            components: [
              {
                components: [
                  { name: "sender", type: "address" },
                  { name: "nonce", type: "uint256" },
                  { name: "callGasLimit", type: "uint256" },
                  { name: "verificationGasLimit", type: "uint256" },
                  { name: "preVerificationGas", type: "uint256" },
                  { name: "paymaster", type: "address" },
                  { name: "maxFeePerGas", type: "uint256" },
                  { name: "maxPriorityFeePerGas", type: "uint256" },
                ],
                name: "mUserOp",
                type: "tuple",
              },
              { name: "userOpHash", type: "bytes32" },
              { name: "prefund", type: "uint256" },
              { name: "contextOffset", type: "uint256" },
              { name: "preOpGas", type: "uint256" },
            ],
            name: "opInfo",
            type: "tuple",
          },
          { name: "context", type: "bytes" },
        ],
        name: "innerHandleOp",
        outputs: [{ name: "actualGasCost", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "", type: "address" },
          { name: "", type: "uint192" },
        ],
        name: "nonceSequenceNumber",
        outputs: [{ name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "op",
            type: "tuple",
          },
          { name: "target", type: "address" },
          { name: "targetCallData", type: "bytes" },
        ],
        name: "simulateHandleOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              { name: "sender", type: "address" },
              { name: "nonce", type: "uint256" },
              { name: "initCode", type: "bytes" },
              { name: "callData", type: "bytes" },
              { name: "callGasLimit", type: "uint256" },
              { name: "verificationGasLimit", type: "uint256" },
              { name: "preVerificationGas", type: "uint256" },
              { name: "maxFeePerGas", type: "uint256" },
              { name: "maxPriorityFeePerGas", type: "uint256" },
              { name: "paymasterAndData", type: "bytes" },
              { name: "signature", type: "bytes" },
            ],
            name: "userOp",
            type: "tuple",
          },
        ],
        name: "simulateValidation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ name: "withdrawAddress", type: "address" }],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "withdrawAddress", type: "address" },
          { name: "withdrawAmount", type: "uint256" },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      { stateMutability: "payable", type: "receive" },
    ];
    e.s(["entryPoint06Abi", 0, eE], 594734),
      e.s(
        [
          "entryPoint06Address",
          0,
          "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
        ],
        713764
      );
    var eD = e.i(704434),
      eA = e.i(831095),
      eB = e.i(995062);
    function eL(e, t = {}) {
      let { forHash: a } = t,
        { authorization: r, factory: n, factoryData: i } = e;
      return a &&
        ("0x7702" === n || "0x7702000000000000000000000000000000000000" === n)
        ? r
          ? (0, ec.concat)([r.address, i ?? "0x"])
          : "0x7702000000000000000000000000000000000000"
        : n
        ? (0, ec.concat)([n, i ?? "0x"])
        : "0x";
    }
    var eU = e.i(401319);
    let eC = "0x22e325a297439656";
    function eF(e, t = {}) {
      let {
          callGasLimit: a,
          callData: r,
          maxPriorityFeePerGas: n,
          maxFeePerGas: i,
          paymaster: s,
          paymasterData: o,
          paymasterPostOpGasLimit: c,
          paymasterSignature: u,
          paymasterVerificationGasLimit: p,
          sender: m,
          signature: d = "0x",
          verificationGasLimit: y,
        } = e,
        l = (0, ec.concat)([
          (0, er.pad)((0, ea.numberToHex)(y || 0n), { size: 16 }),
          (0, er.pad)((0, ea.numberToHex)(a || 0n), { size: 16 }),
        ]),
        f = eL(e, t),
        g = (0, ec.concat)([
          (0, er.pad)((0, ea.numberToHex)(n || 0n), { size: 16 }),
          (0, er.pad)((0, ea.numberToHex)(i || 0n), { size: 16 }),
        ]),
        b = e.nonce ?? 0n;
      return {
        accountGasLimits: l,
        callData: r,
        initCode: f,
        gasFees: g,
        nonce: b,
        paymasterAndData: s
          ? (0, ec.concat)([
              s,
              (0, er.pad)((0, ea.numberToHex)(p || 0n), { size: 16 }),
              (0, er.pad)((0, ea.numberToHex)(c || 0n), { size: 16 }),
              o || "0x",
              ...(u
                ? t.forHash
                  ? [eC]
                  : [
                      u,
                      (0, er.pad)((0, ea.numberToHex)((0, eU.size)(u)), {
                        size: 2,
                      }),
                      eC,
                    ]
                : []),
            ])
          : "0x",
        preVerificationGas: e.preVerificationGas ?? 0n,
        sender: m,
        signature: d,
      };
    }
    let eS = {
      PackedUserOperation: [
        { type: "address", name: "sender" },
        { type: "uint256", name: "nonce" },
        { type: "bytes", name: "initCode" },
        { type: "bytes", name: "callData" },
        { type: "bytes32", name: "accountGasLimits" },
        { type: "uint256", name: "preVerificationGas" },
        { type: "bytes32", name: "gasFees" },
        { type: "bytes", name: "paymasterAndData" },
      ],
    };
    function eT(e) {
      let { chainId: t, entryPointAddress: a, entryPointVersion: r } = e,
        n = e.userOperation,
        {
          authorization: i,
          callData: s = "0x",
          callGasLimit: o,
          maxFeePerGas: c,
          maxPriorityFeePerGas: u,
          nonce: p,
          paymasterAndData: m = "0x",
          preVerificationGas: d,
          sender: y,
          verificationGasLimit: l,
        } = n;
      if ("0.8" === r || "0.9" === r)
        return (0, eB.hashTypedData)(
          (function (e) {
            let { chainId: t, entryPointAddress: a, userOperation: r } = e;
            return {
              types: eS,
              primaryType: "PackedUserOperation",
              domain: {
                name: "ERC4337",
                version: "1",
                chainId: t,
                verifyingContract: a,
              },
              message: eF(r, { forHash: !0 }),
            };
          })({ chainId: t, entryPointAddress: a, userOperation: n })
        );
      let f = (() => {
        if ("0.6" === r) {
          let e = eL(
            {
              authorization: i,
              factory: n.initCode?.slice(0, 42),
              factoryData: n.initCode?.slice(42),
            },
            { forHash: !0 }
          );
          return (0, eD.encodeAbiParameters)(
            [
              { type: "address" },
              { type: "uint256" },
              { type: "bytes32" },
              { type: "bytes32" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "uint256" },
              { type: "bytes32" },
            ],
            [
              y,
              p,
              (0, eA.keccak256)(e),
              (0, eA.keccak256)(s),
              o,
              l,
              d,
              c,
              u,
              (0, eA.keccak256)(m),
            ]
          );
        }
        if ("0.7" === r) {
          let e = eF(n, { forHash: !0 });
          return (0, eD.encodeAbiParameters)(
            [
              { type: "address" },
              { type: "uint256" },
              { type: "bytes32" },
              { type: "bytes32" },
              { type: "bytes32" },
              { type: "uint256" },
              { type: "bytes32" },
              { type: "bytes32" },
            ],
            [
              e.sender,
              e.nonce,
              (0, eA.keccak256)(e.initCode),
              (0, eA.keccak256)(e.callData),
              e.accountGasLimits,
              e.preVerificationGas,
              e.gasFees,
              (0, eA.keccak256)(e.paymasterAndData),
            ]
          );
        }
        throw Error(`entryPointVersion "${r}" not supported.`);
      })();
      return (0, eA.keccak256)(
        (0, eD.encodeAbiParameters)(
          [{ type: "bytes32" }, { type: "address" }, { type: "uint256" }],
          [(0, eA.keccak256)(f), a, BigInt(t)]
        )
      );
    }
    e.s(["getUserOperationHash", () => eT], 547160);
    var eI = e.i(137195),
      ek = e.i(528804),
      ej = e.i(388750),
      eV = e.i(903472),
      eM = e.i(855100);
    async function eH(e) {
      let {
          extend: t,
          nonceKeyManager: a = (0, eV.createNonceManager)({
            source: { get: () => Date.now(), set() {} },
          }),
          ...r
        } = e,
        n = !1,
        s = await e.getAddress();
      return {
        ...t,
        ...r,
        address: s,
        async getFactoryArgs() {
          return "isDeployed" in this && (await this.isDeployed())
            ? { factory: void 0, factoryData: void 0 }
            : e.getFactoryArgs();
        },
        async getNonce(t) {
          let r =
            t?.key ??
            BigInt(
              await a.consume({
                address: s,
                chainId: e.client.chain.id,
                client: e.client,
              })
            );
          return e.getNonce
            ? await e.getNonce({ ...t, key: r })
            : await (0, ej.readContract)(e.client, {
                abi: (0, eI.parseAbi)([
                  "function getNonce(address, uint192) pure returns (uint256)",
                ]),
                address: e.entryPoint.address,
                functionName: "getNonce",
                args: [s, r],
              });
        },
        isDeployed: async () =>
          !!n ||
          (n = !!(await (0, i.getAction)(
            e.client,
            ek.getCode,
            "getCode"
          )({ address: s }))),
        ...(e.sign
          ? {
              async sign(t) {
                let [{ factory: a, factoryData: r }, n] = await Promise.all([
                  this.getFactoryArgs(),
                  e.sign(t),
                ]);
                return a && r
                  ? (0, eM.serializeErc6492Signature)({
                      address: a,
                      data: r,
                      signature: n,
                    })
                  : n;
              },
            }
          : {}),
        async signMessage(t) {
          let [{ factory: a, factoryData: r }, n] = await Promise.all([
            this.getFactoryArgs(),
            e.signMessage(t),
          ]);
          return a && r && "0x7702" !== a
            ? (0, eM.serializeErc6492Signature)({
                address: a,
                data: r,
                signature: n,
              })
            : n;
        },
        async signTypedData(t) {
          let [{ factory: a, factoryData: r }, n] = await Promise.all([
            this.getFactoryArgs(),
            e.signTypedData(t),
          ]);
          return a && r && "0x7702" !== a
            ? (0, eM.serializeErc6492Signature)({
                address: a,
                data: r,
                signature: n,
              })
            : n;
        },
        type: "smart",
      };
    }
    e.s(["toSmartAccount", () => eH], 875740);
  },
]);
