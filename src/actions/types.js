// @flow
import type { CRDP$NodeId } from 'devtools-typed/domain/DOM';
import type { NodeStyleMap, NormalizedNodeMap } from '../types';

export type ConnectAction = { type: 'CONNECT' };
export type DisconnectAction = { type: 'DISCONNECT' };
export type ReconnectAction = { type: 'RECONNECT' };
export type ReconnectAttemptAction = { type: 'RECONNECT_ATTEMPT_ACTION' };
export type ReconnectFailedAction = { type: 'RECONNECT_FAILED_ACTION' };

export type TargetConnectedAction = { type: 'TARGET_CONNECTED' };
export type TargetDisconnectedAction = { type: 'TARGET_DISCONNECTED' };

// Represents a new inspection target (nodes, styles, inspection root?).
export type SetDocumentAction = {
  type: 'SET_DOCUMENT',
  data: {
    styles: NodeStyleMap,
    entities: {
      nodes: NormalizedNodeMap,
    },
  },
};

export type ToggleSelectNodeAction = {
  type: 'TOGGLE_SELECT_NODE',
  data: {
    nodeId: CRDP$NodeId,
  },
};

export type SetStylesAction = {
  type: 'SET_STYLES',
  data: {
    styles: NodeStyleMap,
  },
};

export type PruneNodeResultAction = {
  type: 'PRUNE_NODE_RESULT',
  data: {
    errors: Error[],
  },
};

// Can originate from server or client
export type SetInspectionRootAction = {
  type: 'SET_INSPECTION_ROOT',
  data: {
    nodeId: CRDP$NodeId,
  },
};

// Dispatched to state, but also pushed to server.
export type PruneNodeAction = {
  type: 'PRUNE_NODE',
  data: {
    nodeId: CRDP$NodeId,
  },
};

// Handled completely by server, never dispatched
export type HighlightNodeAction = {
  type: 'HIGHLIGHT_NODE',
  data: {
    // If `nodeId` is null, the highlight will be cleared.
    nodeId: CRDP$NodeId,
  },
};

export type ClearHighlightAction = {
  type: 'CLEAR_HIGHLIGHT',
};

export type RequestStyleForNodeAction = {
  type: 'REQUEST_STYLE_FOR_NODE',
  data: {
    nodeId: CRDP$NodeId,
  },
};

export type ToggleCSSPropertyAction = {
  type: 'TOGGLE_CSS_PROPERTY',
  data: {
    nodeId: CRDP$NodeId,
    ruleIdx: number,
    propIdx: number,
  },
};

export type Action =
  | ConnectAction
  | DisconnectAction
  | ReconnectAction
  | ReconnectAttemptAction
  | ReconnectFailedAction
  | TargetConnectedAction
  | TargetDisconnectedAction
  | SetDocumentAction
  | SetStylesAction
  | PruneNodeResultAction
  | SetInspectionRootAction
  | ToggleSelectNodeAction
  | PruneNodeAction
  | HighlightNodeAction
  | ClearHighlightAction
  | RequestStyleForNodeAction
  | ToggleCSSPropertyAction;
