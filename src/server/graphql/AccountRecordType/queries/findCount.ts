import { queryField, nonNull, list } from 'nexus'

export const AccountRecordTypeFindCountQuery = queryField(
  'findManyAccountRecordTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AccountRecordTypeWhereInput',
      orderBy: list('AccountRecordTypeOrderByInput'),
      cursor: 'AccountRecordTypeWhereUniqueInput',
      distinct: 'AccountRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accountRecordType.count(args as any)
    },
  },
)
