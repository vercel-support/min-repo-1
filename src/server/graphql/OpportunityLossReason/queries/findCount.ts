import { queryField, nonNull, list } from 'nexus'

export const OpportunityLossReasonFindCountQuery = queryField(
  'findManyOpportunityLossReasonCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OpportunityLossReasonWhereInput',
      orderBy: list('OpportunityLossReasonOrderByInput'),
      cursor: 'OpportunityLossReasonWhereUniqueInput',
      distinct: 'OpportunityLossReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityLossReason.count(args as any)
    },
  },
)
