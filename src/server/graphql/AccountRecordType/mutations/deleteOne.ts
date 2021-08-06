import { mutationField, nonNull } from 'nexus'

export const AccountRecordTypeDeleteOneMutation = mutationField(
  'deleteOneAccountRecordType',
  {
    type: 'AccountRecordType',
    args: {
      where: nonNull('AccountRecordTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.accountRecordType.delete({
        where,
        ...select,
      })
    },
  },
)
