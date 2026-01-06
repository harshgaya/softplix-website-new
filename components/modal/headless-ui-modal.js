// ModalHeadlessUi.jsx
"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ModalHeadlessUi({ isOpen, onClose, children }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 text-black" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="
                  relative w-full max-w-xl
                  rounded-2xl bg-white
                  shadow-2xl
                  max-h-[90vh] overflow-y-auto
                "
              >
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="
                    absolute top-4 right-4
                    text-gray-400 hover:text-gray-600
                    focus:outline-none
                  "
                  aria-label="Close modal"
                >
                  ✕
                </button>

                {/* Content */}
                <div className="p-6 sm:p-8 bg-transparent">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
