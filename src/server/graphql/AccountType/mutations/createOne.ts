import { mutationField, nonNull } from 'nexus'

export const AccountTypeCreateOneMutation = mutationField(
  'createOneAccountType',
  {
    type: nonNull('AccountType'),
    args: {
      data: nonNull('AccountTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.accountType.create({
        data,
        ...select,
      })
    },
  },
)
