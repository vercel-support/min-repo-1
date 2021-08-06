import { mutationField, nonNull } from 'nexus'

export const AccountTypeUpdateOneMutation = mutationField(
  'updateOneAccountType',
  {
    type: nonNull('AccountType'),
    args: {
      where: nonNull('AccountTypeWhereUniqueInput'),
      data: nonNull('AccountTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.accountType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
