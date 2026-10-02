from typing import Any, Literal, overload
from collections.abc import Awaitable, Sequence
from agent_framework import (
    AgentResponse,
    AgentResponseUpdate,
    AgentSession,
    Message,
    ResponseStream,
    SupportsAgentRun,
)

class Orquestador(SupportsAgentRun):
    """A custom agent that implements the SupportsAgentRun directly."""

    @property
    def id(self) -> str:
        """Returns the ID of the agent."""
        ...

    @overload
    def run(
        self,
        messages: str | Message | Sequence[str | Message] | None = None,
        *,
        stream: Literal[False] = False,
        session: AgentSession | None = None,
        **kwargs: Any,
    ) -> Awaitable[AgentResponse]: ...

    @overload
    def run(
        self,
        messages: str | Message | Sequence[str | Message] | None = None,
        *,
        stream: Literal[True],
        session: AgentSession | None = None,
        **kwargs: Any,
    ) -> ResponseStream[AgentResponseUpdate, AgentResponse]: ...

    def run(
        self,
        messages: str | Message | Sequence[str | Message] | None = None,
        *,
        stream: bool = False,
        session: AgentSession | None = None,
        **kwargs: Any,
    ) -> Awaitable[AgentResponse] | ResponseStream[AgentResponseUpdate, AgentResponse]:
        """Execute the agent and return either an awaitable response or a ResponseStream."""
        ...