import { queryField, nonNull } from 'nexus'

export const AccountRecordTypeFindUniqueQuery = queryField(
  'findUniqueAccountRecordType',
  {
    type: 'AccountRecordType',
    args: {
      where: nonNull('AccountRecordTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.accountRecordType.findUnique({
        where,
        ...select,
      })
    },
  },
)
