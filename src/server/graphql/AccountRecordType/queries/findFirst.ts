import { queryField, list } from 'nexus'

export const AccountRecordTypeFindFirstQuery = queryField(
  'findFirstAccountRecordType',
  {
    type: 'AccountRecordType',
    args: {
      where: 'AccountRecordTypeWhereInput',
      orderBy: list('AccountRecordTypeOrderByInput'),
      cursor: 'AccountRecordTypeWhereUniqueInput',
      distinct: 'AccountRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountRecordType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
