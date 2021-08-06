import { mutationField, nonNull } from 'nexus'

export const ContactDeleteManyMutation = mutationField('deleteManyContact', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ContactWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.contact.deleteMany({ where } as any)
  },
})
