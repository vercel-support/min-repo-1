import { queryField, list } from 'nexus'

export const ContactRecordTypeAggregateQuery = queryField(
  'aggregateContactRecordType',
  {
    type: 'AggregateContactRecordType',
    args: {
      where: 'ContactRecordTypeWhereInput',
      orderBy: list('ContactRecordTypeOrderByInput'),
      cursor: 'ContactRecordTypeWhereUniqueInput',
      distinct: 'ContactRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contactRecordType.aggregate({ ...args, ...select }) as any
    },
  },
)
