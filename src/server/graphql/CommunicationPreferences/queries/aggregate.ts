import { queryField, list } from 'nexus'

export const CommunicationPreferencesAggregateQuery = queryField(
  'aggregateCommunicationPreferences',
  {
    type: 'AggregateCommunicationPreferences',
    args: {
      where: 'CommunicationPreferencesWhereInput',
      orderBy: list('CommunicationPreferencesOrderByInput'),
      cursor: 'CommunicationPreferencesWhereUniqueInput',
      distinct: 'CommunicationPreferencesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.communicationPreferences.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
