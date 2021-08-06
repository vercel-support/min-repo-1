import { queryField, list } from 'nexus'

export const AccountRecordTypeAggregateQuery = queryField(
  'aggregateAccountRecordType',
  {
    type: 'AggregateAccountRecordType',
    args: {
      where: 'AccountRecordTypeWhereInput',
      orderBy: list('AccountRecordTypeOrderByInput'),
      cursor: 'AccountRecordTypeWhereUniqueInput',
      distinct: 'AccountRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountRecordType.aggregate({ ...args, ...select }) as any
    },
  },
)
