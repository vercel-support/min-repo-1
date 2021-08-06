import { mutationField, nonNull } from 'nexus'

export const ContactRecordTypeDeleteOneMutation = mutationField(
  'deleteOneContactRecordType',
  {
    type: 'ContactRecordType',
    args: {
      where: nonNull('ContactRecordTypeWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.contactRecordType.delete({
        where,
        ...select,
      })
    },
  },
)
