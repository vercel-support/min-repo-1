import { mutationField, nonNull } from 'nexus'

export const ContactRecordTypeDeleteManyMutation = mutationField(
  'deleteManyContactRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ContactRecordTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.contactRecordType.deleteMany({ where } as any)
    },
  },
)
