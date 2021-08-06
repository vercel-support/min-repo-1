import { queryField, nonNull, list } from 'nexus'

export const AccountRecordTypeFindManyQuery = queryField(
  'findManyAccountRecordType',
  {
    type: nonNull(list(nonNull('AccountRecordType'))),
    args: {
      where: 'AccountRecordTypeWhereInput',
      orderBy: list('AccountRecordTypeOrderByInput'),
      cursor: 'AccountRecordTypeWhereUniqueInput',
      distinct: 'AccountRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountRecordType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
